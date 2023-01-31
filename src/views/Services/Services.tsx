import {
    styles,
    WrapperTop,
    WrapperMain,
    ButtonOpacity,
    TextNameUser,
    TextCenterView,
    TextNotServices,
    ButtonGoback,
    InputSearch,
    WrapperContent
} from './Services_Styled';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { ICompanies } from '../../types';

import {
    Octicons
} from '@expo/vector-icons';

import IconUser from '../../assets/icon-user.svg';
import IconSearch from '../../assets/icon-search.svg';
import IconClose from '../../assets/icon-close.svg';
import api from '../../services/api';
import CardCompany from '../../components/CardCompany/CardCompany';
import { useAuth } from '../../context/Auth';
import ViewServiceCompany from '../../components/ViewServiceCompany/ViewServiceCompany';

export default function Services() {
    const { authData } = useAuth();
    const nav = useNavigation();
    const [notFoundCompany, setNotFoundCompany] = useState("");
    const [inputSearch, setInputSearch] = useState("");
    const [companyId, setCompanyId] = useState<string>("");
    const [openServices, setOpenServices] = useState<boolean>(false);
    const [companies, setCompanies] = useState<ICompanies[]>();

    async function getAllCompanies() {
        const response = await api.get('/companies');
        setCompanies(response.data)
    }

    async function searchServices() {
        setNotFoundCompany("");
        if (!inputSearch.trim()) {
            getAllCompanies();
            return
        }
        try {
            const response = await api.get(`/search-companies?name=${inputSearch}`)

            if (!response.data.length) {
                return setNotFoundCompany("Nenhum serviço encontrado");
            }
            setCompanies(response.data);
            setNotFoundCompany("");
        } catch (error: any) {
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
        <SafeAreaView style={{ flex: 1, justifyContent: "flex-start", backgroundColor: "#09184D" }}>
            <WrapperTop>
                <ButtonGoback
                    onPress={() => nav.navigate("Home")}
                >
                    <Octicons
                        name="arrow-left"
                        size={34}
                        color="#EDF2FA" />
                </ButtonGoback>
                <TextNameUser>{`Olá, ${authData?.name?.split(" ")[0]}`}</TextNameUser>
                {
                    openServices ?
                        <ButtonOpacity
                            onPress={() => setOpenServices(false)}
                            style={{ marginBottom: 10 }}
                        >
                            <IconClose
                                style={styles.iconUser}
                            />
                        </ButtonOpacity>
                        :
                        <ButtonOpacity
                            onPress={() => nav.navigate("Minha Conta")}
                        >
                            <IconUser
                                style={styles.iconUser}
                            />
                        </ButtonOpacity>
                }
            </WrapperTop>
            {
                openServices ?
                    <ViewServiceCompany
                        companyId={companyId}
                    />
                    :
                    <WrapperMain>
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
                                        <TextNotServices>
                                            {notFoundCompany}
                                        </TextNotServices>
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
                            </WrapperContent>
                        </ScrollView>
                    </WrapperMain>
            }
        </SafeAreaView>

    )
};