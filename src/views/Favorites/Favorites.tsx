import {
    styles,
    WrapperTop,
    WrapperMain,
    ButtonOpacity,
    TextNameUser,
    TextCenterView,
    TextNotFavorites,
    ButtonGoback
} from './Favorites_Styled';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";

import {
    Octicons
} from '@expo/vector-icons';

import IconUser from '../../assets/icon-user.svg';


export default function Favorites() {
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
                    FAVORITOS
                </TextCenterView>
                <TextNotFavorites>
                    Você ainda não favoritou nenhum serviço
                </TextNotFavorites>
            </WrapperMain>
        </SafeAreaView>
    )
};