import {
    WrapperMain,
    InputSearch,
    WrapperInputs,
    TextNameUser,
    WrapperTop,
    ButtonOpacity,
    ContainersButtons,
    WrapperButtonsTop,
    WrapperButtonsBottom,
    CardsButtons,
    ContainerCardsButtons,
    TextCardsButtons
} from './Home_Styled';
import styles from './Home_Styled';

import { ButtonGoback } from '../Services/Services_Styled';

import { Octicons } from '@expo/vector-icons';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';

import IconClose from '../../assets/icon-close.svg';
import IconSearch from '../../assets/icon-search.svg';
import IconUser from '../../assets/icon-user.svg';
import IconSchedule from '../../assets/icon-schedule.svg';
import IconFavorites from '../../assets/icon-favorites.svg';
import IconConfigure from '../../assets/icon-configure.svg';
import IconHistoric from '../../assets/icon-historic.svg';
import { useAuth } from '../../context/Auth';
import ServiceComponent from '../../components/Services/ServiceComponent';

export default function Home() {
    const nav = useNavigation();
    const { authData } = useAuth();
    const [openSearchServices, setOpenSearchServices] = useState(false);
    const [openServices, setOpenServices] = useState<boolean>(false);
    const [inputSearch, setInputSearch] = useState("");

    function inputSearchAndClear() {
        setOpenSearchServices(false);
        setInputSearch("");
        setOpenServices(false);
    }

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "flex-start", backgroundColor: "#09184D" }}>
            <WrapperTop>
                <TextNameUser>{`Olá, ${authData?.name?.split(" ")[0]}`}</TextNameUser>
                <ButtonOpacity
                    onPress={() => nav.navigate("Minha Conta")}
                >
                    <IconUser
                        style={styles.iconUser}
                    />
                </ButtonOpacity>
            </WrapperTop>
            <WrapperMain>
                <ContainersButtons>
                    <WrapperButtonsTop>
                        <ContainerCardsButtons>
                            <CardsButtons>
                                <IconSchedule
                                    style={styles.iconSchedule}
                                    onPress={() => nav.navigate("Meus Agendamentos")}
                                />
                            </CardsButtons>
                            <TextCardsButtons>MEUS AGENDAMENTOS</TextCardsButtons>
                        </ContainerCardsButtons>
                        <ContainerCardsButtons>
                            <CardsButtons>
                                <IconFavorites
                                    style={styles.iconFavorites}
                                    onPress={() => nav.navigate("Favoritos")}
                                />
                            </CardsButtons>
                            <TextCardsButtons>FAVORITOS</TextCardsButtons>
                        </ContainerCardsButtons>
                    </WrapperButtonsTop>
                    <WrapperButtonsBottom>
                        <ContainerCardsButtons>
                            <CardsButtons>
                                <IconHistoric
                                    style={styles.iconHistoric}
                                    onPress={() => nav.navigate("Historico")}
                                />
                            </CardsButtons>
                            <TextCardsButtons>HISTÓRICO</TextCardsButtons>
                        </ContainerCardsButtons>
                        <ContainerCardsButtons>
                            <CardsButtons>
                                <IconConfigure
                                    style={styles.iconConfigure}
                                    onPress={() => nav.navigate("Serviços")}
                                />
                            </CardsButtons>
                            <TextCardsButtons>SERVIÇOS</TextCardsButtons>
                        </ContainerCardsButtons>
                    </WrapperButtonsBottom>
                </ContainersButtons>
            </WrapperMain>
        </SafeAreaView>
    )
};