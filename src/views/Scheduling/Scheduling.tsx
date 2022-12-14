import {
    styles,
    WrapperTop,
    WrapperMain,
    ButtonOpacity,
    TextNameUser,
    TextCenterView,
    TextNotFavorites,
    ButtonGoback
} from './Scheduling_Styled';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";

import {
    Octicons
} from '@expo/vector-icons';

import IconUser from '../../assets/icon-user.svg';


export default function Scheduling() {
    const nav = useNavigation();

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
                    MEUS AGENDAMENTOS
                </TextCenterView>
                <TextNotFavorites>
                    Não há agendamentos no momento
                </TextNotFavorites>
            </WrapperMain>
        </SafeAreaView>
    )
};