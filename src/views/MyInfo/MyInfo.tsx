import {
    WrapperTop,
    WrapperMain,
    TextTop,
    ContainerInfoOptions,
    TextContainerInfoOptions,
    ButtonGoback,
} from './MyInfo_Styled';

import styles from './MyInfo_Styled';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";

import {
    Octicons
} from '@expo/vector-icons';

import IconMyAccount from '../../assets/icon-my-account.svg';
import IconEmailAccount from '../../assets/icon-email-account.svg';
import IconPhoneAccount from '../../assets/icon-phone-account.svg';
import IconAddress from '../../assets/icon-address-account.svg';

export default function MyInfo() {
    const nav = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "flex-start", backgroundColor: "#09184D" }}>
            <WrapperTop>
                <ButtonGoback
                    onPress={() => nav.goBack()}
                >
                    <Octicons
                        name="arrow-left"
                        size={34}
                        color="#EDF2FA" />
                </ButtonGoback>
                <TextTop>Minhas informações</TextTop>
            </WrapperTop>
            <WrapperMain>
                <ContainerInfoOptions>
                    <IconMyAccount
                        style={styles.iconsInfo}
                    />
                    <TextContainerInfoOptions>
                        Dionnatan Alves Pereira
                    </TextContainerInfoOptions>
                </ContainerInfoOptions>
                <ContainerInfoOptions>
                    <IconEmailAccount
                        style={styles.iconsInfo}
                    />
                    <TextContainerInfoOptions>
                        dionnatan@email.com
                    </TextContainerInfoOptions>
                </ContainerInfoOptions>
                <ContainerInfoOptions>
                    <IconPhoneAccount
                        style={styles.iconsInfo}
                    />
                    <TextContainerInfoOptions>
                        (98) 99999-9999
                    </TextContainerInfoOptions>
                </ContainerInfoOptions>
                <ContainerInfoOptions>
                    <IconAddress
                        style={styles.iconsInfo}
                    />
                    <TextContainerInfoOptions>
                        Rua 05, bairro Santo Onofre, 
                        São Luís - MA, próximo ao shopping
                    </TextContainerInfoOptions>
                </ContainerInfoOptions>
            </WrapperMain>
        </SafeAreaView>
    )
};