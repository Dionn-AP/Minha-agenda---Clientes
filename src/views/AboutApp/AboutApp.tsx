import {
    WrapperTop,
    WrapperMain,
    TextTop,
    ContainerInfoOptions,
    TextContainerInfoOptions,
    ButtonGoback,
    TextBottomversion
} from './AboutApp_Styled';

import * as Linking from 'expo-linking';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";

import {
    Octicons
} from '@expo/vector-icons';


export default function AboutApp() {
    const nav = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "flex-end", backgroundColor: "#09184D" }}>
            <WrapperTop>
                <ButtonGoback
                    onPress={() => nav.goBack()}
                >
                    <Octicons
                        name="arrow-left"
                        size={34}
                        color="#EDF2FA" />
                </ButtonGoback>
                <TextTop>Sobre</TextTop>
            </WrapperTop>
            <WrapperMain>
                <ContainerInfoOptions>
                    <TextContainerInfoOptions>
                        Este App tem o intuito de facilitar a busca
                        por serviços e possibilitar agendamentos de maneira simples e eficaz entre
                        usuários e prestadores de serviço.
                    </TextContainerInfoOptions>
                    <TextContainerInfoOptions>
                        Desenvolvido por
                        <TextContainerInfoOptions
                            onPress={() => Linking.openURL('https://github.com/Dionn-AP')}
                            style={{ color: "#7B5BF2" }}
                        > Dionnatan Alves </TextContainerInfoOptions>
                         e
                        <TextContainerInfoOptions
                            onPress={() => Linking.openURL('https://github.com/askagi')}
                            style={{ color: "#7B5BF2" }}
                        > José Costa</TextContainerInfoOptions>
                    </TextContainerInfoOptions>
                </ContainerInfoOptions>

                <TextBottomversion>Versão 1.0.0</TextBottomversion>
            </WrapperMain>
        </SafeAreaView>
    )
};