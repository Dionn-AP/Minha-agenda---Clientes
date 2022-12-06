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
import { TouchableHighlight } from 'react-native';

import {
    MaterialCommunityIcons,
    Feather,
    MaterialIcons
} from '@expo/vector-icons'

import { useState } from 'react';
import { upperCaseName } from '../../utils/services';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";


export default function Login() {
    const nav = useNavigation();

    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [showPassword, setShowPassword] = useState(true);

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
                            autoCapitalize="none"
                        />
                        <ButtonInputs style={{ left: 8 }}>
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
                            secureTextEntry={showPassword}
                            autoCapitalize="none"
                        />
                        <ButtonInputs style={{ left: 8 }}>
                            <MaterialIcons
                                name="lock-outline"
                                size={34}
                                color="#808085" />
                        </ButtonInputs>
                        <ButtonInputs style={{ top: 16, right: 10 }}
                            onPress={() => setShowPassword(!showPassword)}
                        >
                            <Feather
                                name={showPassword ? "eye-off" : "eye"}
                                size={28}
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
                    <TexBottomLogin style={{ marginRight: 4 }}>
                        Novo por aqui,
                    </TexBottomLogin>
                    <TexBottomLogin style={{ color: "#7B5BF2" }}
                        onPress={() => nav.navigate("Signup")}
                    >
                        cadastre-se!
                    </TexBottomLogin>
                </WrapperTextBottomLogin>
            </WrapperLogin>
        </SafeAreaView>
    )
};