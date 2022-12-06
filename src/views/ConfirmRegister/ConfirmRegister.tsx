import {
    WrapperConfirmRegister,
    FormConfirmRegister,
    TextTopConfirmRegister,
    WrapperInputsConfirmRegister,
    InputsConfirmRegister,
    ContainerImageSuccess,
    ImageConfirmSuccess,
    ButtonConfirmRegister,
    TextButtonConfirmRegister,
    TexBottomConfirmRegister,
    ButtonGoback
} from './ConfirmRegister_Styled';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';

import {
    MaterialCommunityIcons,
    Octicons
} from '@expo/vector-icons';


export default function ConfirmRegister() {
    const nav = useNavigation();
    const [inputCodeOne, setInputCodeOne] = useState("");
    const [inputCodeTwo, setInputCodeTwo] = useState("");
    const [inputCodeThree, setInputCodeThree] = useState("");
    const [inputCodeFour, setInputCodeFour] = useState("");
    const [confirm, setConfirm] = useState(false);

    const textTop = (text: string) => { return text };

    const confirmRegister = () => {
        setConfirm(true)
        textTop("Cadastro concluído com sucesso!")

    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <WrapperConfirmRegister>
                <ButtonGoback
                    onPress={() => nav.goBack()}
                >
                    <Octicons
                        name="arrow-left"
                        size={34}
                        color="#EDF2FA" />
                </ButtonGoback>
                <TextTopConfirmRegister>
                    {textTop("Você receberá um código de confirmação no seu e-mail")}
                </TextTopConfirmRegister>
                {confirm ?
                    <ContainerImageSuccess>
                        <ImageConfirmSuccess
                            source={require("../../assets/splash-success.png")}
                        />
                    </ContainerImageSuccess>
                    :
                    <FormConfirmRegister>
                        <WrapperInputsConfirmRegister>
                            <InputsConfirmRegister
                                onChangeText={setInputCodeOne}
                                value={inputCodeOne}
                                placeholderTextColor={"rgba(128, 128, 133, 0.5)"}
                                autoCapitalize="none"
                                keyboardType='numeric'
                                maxLength={1}
                                autoFocus={!inputCodeOne ? true : false}
                            />
                            <InputsConfirmRegister
                                onChangeText={setInputCodeTwo}
                                value={inputCodeTwo}
                                placeholderTextColor={"rgba(128, 128, 133, 0.5)"}
                                autoCapitalize="none"
                                keyboardType='numeric'
                                maxLength={1}
                            />
                            <InputsConfirmRegister
                                onChangeText={setInputCodeThree}
                                value={inputCodeThree}
                                placeholderTextColor={"rgba(128, 128, 133, 0.5)"}
                                autoCapitalize="none"
                                keyboardType='numeric'
                                maxLength={1}
                            />
                            <InputsConfirmRegister
                                onChangeText={setInputCodeFour}
                                value={inputCodeFour}
                                placeholderTextColor={"rgba(128, 128, 133, 0.5)"}
                                autoCapitalize="none"
                                keyboardType='numeric'
                                maxLength={1}
                            />
                        </WrapperInputsConfirmRegister>
                        <ButtonConfirmRegister
                            onPress={() => confirmRegister()}
                        >
                            <TextButtonConfirmRegister>CONFIRMAR</TextButtonConfirmRegister>
                        </ButtonConfirmRegister>

                    </FormConfirmRegister>
                }
                {confirm &&
                    <ButtonConfirmRegister
                        onPress={() => nav.navigate("Login")}
                    >
                        <TextButtonConfirmRegister>LOGIN</TextButtonConfirmRegister>
                    </ButtonConfirmRegister>
                }
                {!confirm &&
                    <TexBottomConfirmRegister>
                        Reenviar código
                    </TexBottomConfirmRegister>
                }
            </WrapperConfirmRegister>
        </SafeAreaView>
    )
};