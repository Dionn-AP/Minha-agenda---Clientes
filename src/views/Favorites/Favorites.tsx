import {
    ButtonGoback,
    ButtonOpacity,
    styles,
    TextCenterView,
    TextNameUser,
    TextNotFavorites,
    WrapperMain,
    WrapperTop
} from './Favorites_Styled';

import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';

import {
    Octicons
} from '@expo/vector-icons';

import { useEffect, useState } from 'react';
import IconUser from '../../assets/icon-user.svg';
import api from '../../services/api';
import { ICompanies } from '../../types';
import { useAuth } from '../../context/Auth';
import CardCompany from '../../components/CardCompany/CardCompany';


export default function Favorites() {
    const nav = useNavigation();
    const { authData } = useAuth();

    // const [companies, setCompanies] = useState<ICompanies[]>([]);

    // async function getCompanies() {
    //     try {
    //         const response = await api.get('/companies');
    //         const dataComapanies = response.data;
    //         const isFavorites = dataComapanies.map((company: any) => {
    //             const favoriteExists = company.id_favorite?.filter((favoriteId: string | string[]) => favoriteId.includes(authData?.id!))
    //             return favoriteExists
    //         });
    //         setCompanies(isFavorites);
    //     } catch (error: any) {
    //         return console.log(error.response.data)
    //     }
    // }


    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "flex-end", backgroundColor: "#09184D" }}>
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
                <ButtonOpacity
                    onPress={() => nav.navigate("Minha Conta")}
                >
                    <IconUser
                        style={styles.iconUser}
                    />
                </ButtonOpacity>
            </WrapperTop>
            <WrapperMain>
                <TextCenterView>
                    FAVORITOS
                </TextCenterView>

                {/* {
                    !companies ?
                        <TextNotFavorites>
                            Você ainda não favoritou nenhum serviço
                        </TextNotFavorites>
                        : companies?.map((compay, index) => {
                            return (
                                <CardCompany
                                    key={index}
                                    name={compay.name}
                                />
                            )
                        })
                } */}
            </WrapperMain>
        </SafeAreaView>
    )
};