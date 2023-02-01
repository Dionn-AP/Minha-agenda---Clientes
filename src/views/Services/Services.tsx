import {
    styles,
    WrapperTop,
    ButtonOpacity,
    TextNameUser,
    ButtonGoback
} from './Services_Styled';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from 'react-native';
import { useState } from 'react';

import { Octicons } from '@expo/vector-icons';

import IconUser from '../../assets/icon-user.svg';
import IconClose from '../../assets/icon-close.svg';
import { useAuth } from '../../context/Auth';
import ServiceComponent from '../../components/Services/ServiceComponent';

export default function Services() {
    const { authData } = useAuth();
    const nav = useNavigation();
    const [inputSearch, setInputSearch] = useState("");
    const [openServices, setOpenServices] = useState<boolean>(false);

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
            <ServiceComponent
                inputSearch={inputSearch}
                setInputSearch={setInputSearch}
                openServices={openServices}
                setOpenServices={setOpenServices}
            />
            <StatusBar barStyle="light-content" backgroundColor="#09184D" translucent />
        </SafeAreaView>
    )
};