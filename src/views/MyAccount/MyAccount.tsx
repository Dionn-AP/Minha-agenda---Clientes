import {
    WrapperTop,
    WrapperMain,
    TextTop,
    ContainerInfoOptions,
    TextContainerInfoOptions,
    ButtonGoback,
} from './MyAccount_Styled';

import styles from './MyAccount_Styled';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";

import {
    Octicons
} from '@expo/vector-icons';

import IconMyAccount from '../../assets/icon-my-account.svg';
import IconEditUser from '../../assets/icon-edit-user.svg';
import IconConfigureAccount from '../../assets/icon-configure-account.svg';
import IconAbout from '../../assets/icon-about.svg';
import IconLogout from '../../assets/icon-logout.svg';


export default function MyAccount() {
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
                <TextTop>Minha Conta</TextTop>
            </WrapperTop>
            <WrapperMain>
                <ContainerInfoOptions>
                    <IconMyAccount
                        onPress={() => nav.navigate("Minhas Info")}
                        style={styles.iconsInfo}
                    />
                    <TextContainerInfoOptions
                        onPress={() => nav.navigate("Minhas Info")}
                    >
                        Minhas informações
                    </TextContainerInfoOptions>
                </ContainerInfoOptions>
                <ContainerInfoOptions>
                    <IconEditUser
                        style={styles.iconsInfo}
                    />
                    <TextContainerInfoOptions>
                        Editar meus dados
                    </TextContainerInfoOptions>
                </ContainerInfoOptions>
                <ContainerInfoOptions>
                    <IconConfigureAccount
                        style={styles.iconsInfo}
                    />
                    <TextContainerInfoOptions>
                        Configurações
                    </TextContainerInfoOptions>
                </ContainerInfoOptions>
                <ContainerInfoOptions>
                    <IconAbout
                        onPress={() => nav.navigate("Sobre")}
                        style={styles.iconsInfo}
                    />
                    <TextContainerInfoOptions
                        onPress={() => nav.navigate("Sobre")}
                    >
                        Sobre
                    </TextContainerInfoOptions>
                </ContainerInfoOptions>
                <ContainerInfoOptions>
                    <IconLogout
                        onPress={() => nav.navigate("Login")}
                        style={styles.iconsInfo}
                    />
                    <TextContainerInfoOptions
                        onPress={() => nav.navigate("Login")}
                    >
                        Sair
                    </TextContainerInfoOptions>
                </ContainerInfoOptions>
            </WrapperMain>
        </SafeAreaView>
    )
};