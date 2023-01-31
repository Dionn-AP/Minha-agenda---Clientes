import {
    ButtonGoback,
    ButtonOpacity,
    styles,
    TextCenterView,
    TextNameUser,
    TextNotFavorites,
    WrapperMain,
    WrapperTop,
    ButtonForServices,
    TextButtonForServices,
    WrapperEmptyContent
} from './Favorites_Styled';

import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';

import {
    Octicons
} from '@expo/vector-icons';

import React, { useEffect, useState } from 'react';
import IconUser from '../../assets/icon-user.svg';
import IconClose from '../../assets/icon-close.svg';
import api from '../../services/api';
import { ICompanies } from '../../types';
import { useAuth } from '../../context/Auth';
import CardCompany from '../../components/CardCompany/CardCompany';
import { ActivityIndicator, Alert } from 'react-native';
import ViewServiceCompany from '../../components/ViewServiceCompany/ViewServiceCompany';


export default function Favorites() {
    const nav = useNavigation();
    const { authData } = useAuth();
    const [companyId, setCompanyId] = useState<string>("");
    const [openServices, setOpenServices] = useState<boolean>(false);
    const [loadingData, setLoadingData] = useState(true);
    const [companies, setCompanies] = useState<ICompanies[]>();

    async function getAllCompanies() {
        try {
            const response = await api.get('/companies');
            const somethingFavorites = response.data.filter((company: any) => company.id_favorite.includes(authData?.id));
            setCompanies(somethingFavorites);
            setLoadingData(false);
        } catch (error: any) {
            setLoadingData(false);
            return Alert.alert('Algo deu errado', 'Não foi possível carregar os dados. Por favor, recarregue o app');
        }

    }

    function ViewServies(idCompany: string) {
        setCompanyId(idCompany);
        setOpenServices(true);
    }

    useEffect(() => {
        getAllCompanies();
    }, [])

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
                <TextNameUser>{`Olá, ${authData?.name!.split(" ")[0]}`}</TextNameUser>
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
                            FAVORITOS
                        </TextCenterView>
                        {loadingData ?
                            <ActivityIndicator
                                color='#7B5BF2'
                                size={80}
                            />
                            :
                            !companies?.length ?
                                <WrapperEmptyContent>
                                    <TextNotFavorites>
                                        Você ainda não favoritou nenhum serviço
                                    </TextNotFavorites>
                                    <ButtonForServices
                                        onPress={() => nav.navigate("Serviços")}
                                        activeOpacity={0.7}
                                    >
                                        <TextButtonForServices>IR PARA SERVIÇOS</TextButtonForServices>
                                    </ButtonForServices>
                                </WrapperEmptyContent>

                                : companies?.map((company, index) => {
                                    const isFavorite = company.id_favorite?.find(favoriteId => favoriteId.includes(authData?.id!))
                                    return (
                                        <CardCompany
                                            key={index}
                                            idCompany={company._id!}
                                            name={company.company}
                                            favorite={isFavorite}
                                            openServices={ViewServies}
                                            getAllCompanies={getAllCompanies}
                                        />
                                    )
                                })
                        }
                    </WrapperMain>
            }
        </SafeAreaView>
    )
};