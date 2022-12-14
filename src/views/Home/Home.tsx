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

import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';
import { 
    Keyboard, 
    TouchableWithoutFeedback, 
    KeyboardAvoidingView, 
    Platform 
} from 'react-native';

import IconSearch from '../../assets/icon-search.svg';
import IconUser from '../../assets/icon-user.svg';
import IconSchedule from '../../assets/icon-schedule.svg';
import IconFavorites from '../../assets/icon-favorites.svg';
import IconConfigure from '../../assets/icon-configure.svg';
import IconHistoric from '../../assets/icon-historic.svg';

export default function Home() {
    const nav = useNavigation();
    const [inputSearch, setInputSearch] = useState("");

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "flex-start", backgroundColor: "#09184D" }}>
            <WrapperTop>
                <TextNameUser>Olá, Dionnatan</TextNameUser>
                <ButtonOpacity
                    onPress={() => nav.navigate("Login")}
                >
                    <IconUser
                        style={styles.iconUser}
                    />
                </ButtonOpacity>

            </WrapperTop>
            <WrapperMain>
                <WrapperInputs>
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
                </WrapperInputs>
                <ContainersButtons>
                    <WrapperButtonsTop>
                        <ContainerCardsButtons>
                            <CardsButtons>
                                <IconSchedule
                                    style={styles.iconSchedule}
                                />
                            </CardsButtons>
                            <TextCardsButtons>MEUS AGENDAMENTOS</TextCardsButtons>
                        </ContainerCardsButtons>
                        <ContainerCardsButtons>
                            <CardsButtons>
                                <IconFavorites
                                    style={styles.iconFavorites}
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
                                />
                            </CardsButtons>
                            <TextCardsButtons>HISTÓRICO</TextCardsButtons>
                        </ContainerCardsButtons>
                        <ContainerCardsButtons>
                            <CardsButtons>
                                <IconConfigure
                                    style={styles.iconConfigure}
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