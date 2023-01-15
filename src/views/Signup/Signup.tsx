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
import { ISignup } from '../../types';
import api from '../../services/api';
import { useState } from 'react';

import {
    MaterialCommunityIcons,
    MaterialIcons,
    Feather,
    FontAwesome5
} from '@expo/vector-icons';

export default function Signup() {
    const nav = useNavigation();

    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [inputConfirmPassword, setInputConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(true);

    async function signUp(name: string, email: string, password: string) {
        try {
            const response = await api.post('/user', {
                name,
                email,
                password
            });
            if(response) {
                nav.navigate("Login");
            }

        } catch (error) {
            console.log(error)
            return;
        }
    }

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
                            autoCapitalize="none"
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
                        <InputsSignup
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
                        <ButtonInputs style={{ top: "18%", right: 10 }}
                            onPress={() => setShowPassword(!showPassword)}
                        >
                            <Feather
                                name={showPassword ? "eye-off" : "eye"}
                                size={28}
                                color="#808085" />
                        </ButtonInputs>
                    </WrapperInputs>
                    <WrapperInputs>
                        <InputsSignup
                            onChangeText={setInputConfirmPassword}
                            value={inputConfirmPassword}
                            placeholder='Confirma sua senha'
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
                        <ButtonInputs style={{ top: "18%", right: 10 }}
                            onPress={() => setShowPassword(!showPassword)}
                        >
                            <Feather
                                name={showPassword ? "eye-off" : "eye"}
                                size={28}
                                color="#808085" />
                        </ButtonInputs>
                    </WrapperInputs>
                    <ButtonSignup
                        onPress={() => signUp(inputName, inputEmail, inputPassword)}
                    >
                        <TextButtonSignup>CADASTRAR</TextButtonSignup>
                    </ButtonSignup>
                </FormSignup>
                <WrapperTextBottomLogin>
                    <TexBottomLogin style={{ marginRight: 4 }}>
                        Já possui uma conta,
                    </TexBottomLogin>
                    <TexBottomLogin style={{ color: "#7B5BF2" }}
                        onPress={() => nav.navigate("Login")}
                    >
                        login!
                    </TexBottomLogin>
                </WrapperTextBottomLogin>
            </WrapperSignup>
        </SafeAreaView>
    )
};
