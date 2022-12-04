import {
    WrapperSignup,
    TextTopSignup,
    FormSignup,
    InputsSignup,
    ButtonSignup,
    WrapperInputs,
    TextButtonSignup,
    ButtonInputs,
    WrapperTextBottomLogin,
    TexBottomLogin
} from './Signup_Styled';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';

import {
    MaterialCommunityIcons,
    EvilIcons,
    MaterialIcons,
    Feather,
    FontAwesome5
} from '@expo/vector-icons'

export default function Signup() {
    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    // const link = (text: string) => <TextButtonLogin style={{ color: '#7B5BF2' }} onPress={() => nav.navigate("Cadastre-se")}>{ text }</TextButtonLogin>

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <WrapperSignup>
                <TextTopSignup>CADASTRE-SE</TextTopSignup>
                <FormSignup>
                    <WrapperInputs>
                        <InputsSignup
                            onChangeText={setInputName}
                            value={inputName}
                            placeholder='Nome'
                            placeholderTextColor={"rgba(128, 128, 133, 0.5)"}
                        />
                        <ButtonInputs style={{ left: 10 }}>
                            <FontAwesome5
                                name="user"
                                size={28} color="#808085"
                            />
                        </ButtonInputs>
                    </WrapperInputs>
                    <WrapperInputs>
                        <InputsSignup
                            onChangeText={setInputEmail}
                            value={inputEmail}
                            placeholder='Email'
                            placeholderTextColor={"rgba(128, 128, 133, 0.5)"}
                        />
                        <ButtonInputs style={{ left: 8 }}>
                            <MaterialCommunityIcons
                                name="email-outline"
                                size={34} color="#808085"
                            />
                        </ButtonInputs>
                    </WrapperInputs>
                    <WrapperInputs>
                        <InputsSignup
                            onChangeText={setInputPassword}
                            value={inputPassword}
                            placeholder='Senha'
                            placeholderTextColor={"rgba(128, 128, 133, 0.5)"}
                        />
                        <ButtonInputs style={{ left: 8 }}>
                            <MaterialIcons
                                name="lock-outline"
                                size={34}
                                color="#808085" />
                        </ButtonInputs>
                        <ButtonInputs style={{ top: 11, right: 10 }}>
                            <Feather
                                name="eye-off"
                                size={28}
                                color="#808085" />
                        </ButtonInputs>
                    </WrapperInputs>
                    <WrapperInputs>
                        <InputsSignup
                            onChangeText={setInputPassword}
                            value={inputPassword}
                            placeholder='Confirma sua senha'
                            placeholderTextColor={"rgba(128, 128, 133, 0.5)"}
                        />
                        <ButtonInputs style={{ left: 8 }}>
                            <MaterialIcons
                                name="lock-outline"
                                size={34}
                                color="#808085" />
                        </ButtonInputs>
                        <ButtonInputs style={{ top: 11, right: 10 }}>
                            <Feather
                                name="eye-off"
                                size={28}
                                color="#808085" />
                        </ButtonInputs>
                    </WrapperInputs>
                    <ButtonSignup>
                        <TextButtonSignup>CADASTRAR</TextButtonSignup>
                    </ButtonSignup>
                </FormSignup>
                <WrapperTextBottomLogin>
                    {/* <TexBottomLogin>
                        Já possui uma conta, {link("login!")}
                    </TexBottomLogin> */}
                    <TexBottomLogin>
                        Já possui uma conta, <TexBottomLogin style={{ color: "#7B5BF2" }}>login!</TexBottomLogin>
                    </TexBottomLogin>
                </WrapperTextBottomLogin>
            </WrapperSignup>
        </SafeAreaView>
    )
};
