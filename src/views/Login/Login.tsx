import {
    WrapperLogin,
    FormLogin,
    TextTopLogin,
    WrapperInputs,
    InputsLogin,
    ImagesInputs,
    ButtonLogin,
    TextButtonLogin,
    TextForgot,
    TexBottomLogin,
    WrapperTextBottomLogin,
    ButtonInputs
} from './Login_Styled';

import { MaterialCommunityIcons, EvilIcons, MaterialIcons } from '@expo/vector-icons'

import { useState } from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";


export default function Login() {
    const nav = useNavigation();

    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    //const link = (text: string) => <TextButtonLogin style={{ color: '#7B5BF2' }} onPress={() => nav.navigate("Cadastre-se")}>{ text }</TextButtonLogin>

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <WrapperLogin>
                <TextTopLogin>LOGIN</TextTopLogin>
                <FormLogin>
                    <WrapperInputs>
                        <InputsLogin
                            onChangeText={setInputEmail}
                            value={inputEmail}
                            placeholder='Email'
                            placeholderTextColor={"rgba(128, 128, 133, 0.5)"}
                        />
                        <ButtonInputs>
                            <MaterialCommunityIcons
                                name="email-outline"
                                size={34} color="#808085"
                            />
                        </ButtonInputs>

                    </WrapperInputs>
                    <WrapperInputs>
                        <InputsLogin
                            onChangeText={setInputPassword}
                            value={inputPassword}
                            placeholder='Senha'
                            placeholderTextColor={"rgba(128, 128, 133, 0.5)"}
                        />
                        <ButtonInputs>
                            {/* <EvilIcons
                                name="lock"
                                size={52}
                                color="#808085"
                            /> */}
                            <MaterialIcons 
                            name="lock-outline" 
                            size={34} 
                            color="#808085" />
                        </ButtonInputs>
                    </WrapperInputs>

                    <ButtonLogin
                    activeOpacity={0.7}
                    >
                        <TextButtonLogin>ENTRAR</TextButtonLogin>
                    </ButtonLogin>
                </FormLogin>
                <TextForgot>Esqueci minha senha</TextForgot>
                <WrapperTextBottomLogin>
                    {/* <TexBottomLogin>
                        Novo por aqui, {link("cadastre-se!")}
                    </TexBottomLogin> */}
                    <TexBottomLogin>
                        Novo por aqui, <TexBottomLogin style={{ color: "#7B5BF2" }}>cadastre-se!</TexBottomLogin>
                    </TexBottomLogin>
                </WrapperTextBottomLogin>
            </WrapperLogin>
        </SafeAreaView>
    )
};