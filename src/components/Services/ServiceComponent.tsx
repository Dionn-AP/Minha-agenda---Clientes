import {
    styles,
    Wrapper,
    WrapperMain,
    ButtonOpacity,
    TextCenterView,
    TextNotServices,
    InputSearch,
    WrapperContent,
    ButtonClearSearch,
    TextButtonClearSearch,
    ViewTextNotFound
} from './ServiceComponent_Styled';

import {
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform,
    ScrollView
} from 'react-native';

import { useEffect, useState } from 'react';
import { ICompanies } from '../../types';

import IconSearch from '../../assets/icon-search.svg';
import api from '../../services/api';
import CardCompany from '../../components/CardCompany/CardCompany';
import { useAuth } from '../../context/Auth';
import ViewServiceCompany from '../../components/ViewServiceCompany/ViewServiceCompany';

interface Props {
    inputSearch?: string;
    setInputSearch: (arg0: string) => void;
    openServices: boolean;
    setOpenServices: (arg0: boolean) => void;
}

export default function ServiceComponent({ openServices, setOpenServices, inputSearch, setInputSearch }: Props) {
    const { authData } = useAuth();
    const [notFoundCompany, setNotFoundCompany] = useState("");
    const [searchActive, setSearchActive] = useState(false);
    const [companyId, setCompanyId] = useState<string>("");
    const [companies, setCompanies] = useState<ICompanies[]>();

    async function getAllCompanies() {
        setSearchActive(false);
        setNotFoundCompany("");
        try {
            const response = await api.get('/companies');
            setCompanies(response.data);
        } catch (error: any) {
            return setNotFoundCompany("Nenhum serviço encontrado");
        }
    }

    async function searchServices() {
        if (!inputSearch?.trim()) {
            return
        }
        setCompanies([]);
        setSearchActive(false);
        setNotFoundCompany("");

        try {
            const response = await api.get(`/search-companies?name=${inputSearch}`)
            if (!response.data.length) {
                return setNotFoundCompany("Nenhum serviço encontrado");
            }
            setSearchActive(true);
            setCompanies(response.data);
            setNotFoundCompany("");
        } catch (error: any) {
            setSearchActive(true);
            return setNotFoundCompany("Nenhum serviço encontrado");
        }
    }

    function ViewServies(idCompany: string) {
        setCompanyId(idCompany);
        setOpenServices(true);
    }

    useEffect(() => {
        getAllCompanies();
    }, []);

    return (
        <WrapperMain>
            {
                openServices ?
                    <ViewServiceCompany
                        companyId={companyId}
                    />
                    :
                    <Wrapper>
                        <TextCenterView>
                            SERVIÇOS
                        </TextCenterView>
                        <KeyboardAvoidingView
                            style={styles.input}
                            behavior={Platform.OS === "ios" ? "position" : "height"}
                        >
                            <IconSearch
                                onPress={() => searchServices()}
                                style={styles.iconSearch}
                            />
                            <InputSearch
                                onChangeText={setInputSearch}
                                value={inputSearch}
                                placeholder='Pesquisar serviços'
                                placeholderTextColor={"rgba(128, 128, 133, 0.5)"}
                                autoCapitalize="none"
                            />
                        </KeyboardAvoidingView>
                        <ScrollView
                            style={{ width: '100%' }}
                            showsVerticalScrollIndicator={false}
                        >
                            <WrapperContent>
                                {
                                    notFoundCompany ?
                                        <ViewTextNotFound>
                                            <TextNotServices>
                                                {notFoundCompany}
                                            </TextNotServices>
                                            <ButtonOpacity
                                                activeOpacity={0.7}
                                                onPress={() => getAllCompanies()}
                                            >
                                                <ButtonClearSearch>
                                                    <TextButtonClearSearch>limpar pesquisa</TextButtonClearSearch>
                                                </ButtonClearSearch>
                                            </ButtonOpacity>
                                        </ViewTextNotFound>
                                        :
                                        !companies ?
                                            <ActivityIndicator
                                                color='#7B5BF2'
                                                size={80}
                                            />
                                            :
                                            companies?.map((company, index) => {
                                                const isFavorite = company.id_favorite?.find(favoriteId => favoriteId.includes(authData?.id!))
                                                return (
                                                    <CardCompany
                                                        key={index}
                                                        name={company.company}
                                                        idCompany={company._id!}
                                                        favorite={isFavorite}
                                                        openServices={ViewServies}
                                                        getAllCompanies={getAllCompanies}
                                                    />
                                                )
                                            })
                                }
                                {
                                    searchActive &&
                                    <ButtonOpacity
                                        activeOpacity={0.7}
                                        onPress={() => getAllCompanies()}
                                    >
                                        <ButtonClearSearch>
                                            <TextButtonClearSearch>limpar pesquisa</TextButtonClearSearch>
                                        </ButtonClearSearch>
                                    </ButtonOpacity>
                                }
                            </WrapperContent>
                        </ScrollView>
                    </Wrapper>
            }
        </WrapperMain>
    )
};