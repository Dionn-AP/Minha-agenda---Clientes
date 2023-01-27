import {
    styles,
    WrapperTop,
    WrapperMain,
    ButtonOpacity,
    TextNameUser,
    TextCenterView,
    TextNotServices,
    ButtonGoback,
    InputSearch
} from './Services_Styled';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import { Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Platform } from 'react-native';
import { useEffect, useState } from 'react';
import { ICompanies } from '../../types';

import {
    Octicons
} from '@expo/vector-icons';

import IconUser from '../../assets/icon-user.svg';
import IconSearch from '../../assets/icon-search.svg';
import api from '../../services/api';
import CardCompany from '../../components/CardCompany/CardCompany';
import { useAuth } from '../../context/Auth';

export default function Services() {
    const { authData } = useAuth();
    const nav = useNavigation();
    const [inputSearch, setInputSearch] = useState("");
    const [companies, setCompanies] = useState<ICompanies[]>();

    useEffect(() => {
        api.get('/companies').then(response => {
            setCompanies(response.data)
        });
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
                <TextNameUser>Olá, Dionnatan</TextNameUser>
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
                    SERVIÇOS
                </TextCenterView>
                <KeyboardAvoidingView
                    style={styles.input}
                    behavior={Platform.OS === "ios" ? "position" : "height"}

                >
                    <IconSearch
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
                {/* <TextNotServices>
                    Nenhum serviço encontrado
                </TextNotServices> */}
                {
                    companies?.map((compay, index) => {
                        const isFavorite = compay.id_favorite?.find(favoriteId => favoriteId.includes(authData?.id!))
                        return (
                            <CardCompany
                                key={index}
                                name={compay.name}
                                favorite={isFavorite}
                            />
                        )
                    })
                }
            </WrapperMain>
        </SafeAreaView>

    )
};