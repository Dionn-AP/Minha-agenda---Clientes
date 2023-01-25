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
import { Alert, StatusBar, ScrollView } from 'react-native';
import { useState } from 'react';
import Loading from '../../components/Loading/Loading';
import { regexValidationEmail } from '../../utils/services';
import api from '../../services/api';


import {
    MaterialCommunityIcons,
    MaterialIcons,
    Feather,
    FontAwesome5
} from '@expo/vector-icons';
import LoadingIn from '../../components/LoadingIn/LoadingIn';

export default function Signup() {
    const nav = useNavigation();
    const [inputConfirmPassword, setInputConfirmPassword] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputName, setInputName] = useState("");
    const [awaitLoading, setAwaitLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(true);

    async function sendMailSignup(name: string, email: string) {
        if (!inputName) {
            return Alert.alert('Algo deu errado', 'Você precisa informar um nome');
        }
        if (!inputEmail || (inputEmail && !regexValidationEmail.test(String(email).toLowerCase()))) {
            return Alert.alert('Algo deu errado', 'Você precisa informar um email válido');
        }
        if (!inputPassword && !inputConfirmPassword) {
            return Alert.alert('Algo deu errado', 'Você precisa informar uma senha');
        }
        if (inputPassword && !inputConfirmPassword) {
            return Alert.alert('Algo deu errado', 'Você precisa confirmar a senha');
        }
        if (inputPassword !== inputConfirmPassword) {
            return Alert.alert('Algo deu errado', 'As senhas precisam ser iguais');
        }

        try {
            setAwaitLoading(true);
            const response = await api.post('/sendmail', {
                name,
                email,
            });
            setAwaitLoading(false);
            nav.navigate("confirmar_adastro", {
                name: inputName,
                email: inputEmail,
                password: inputPassword
            });

        } catch (error: any) {
            setAwaitLoading(false);
            console.log(error.response.data)
            return Alert.alert('Algo deu errado', error.response.data.message);
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#09184D' }}>
            {/* {
                awaitLoading
                    ? <Loading />
                    : */}
            <WrapperSignup>
                <TextTopSignup style={{ fontFamily: 'Inter_700Bold' }}>CADASTRE-SE</TextTopSignup>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ minWidth: '100%', justifyContent: 'center', alignContent: 'center' }}
                >
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
                                keyboardType='email-address'
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
                            onPress={() => sendMailSignup(inputName, inputEmail)}
                        >
                            {
                                awaitLoading
                                    ? <LoadingIn />
                                    : <TextButtonSignup style={{ fontFamily: 'Inter_600SemiBold' }}>CADASTRAR</TextButtonSignup>
                            }
                        </ButtonSignup>
                    </FormSignup>
                    <WrapperTextBottomLogin>
                        <TexBottomLogin style={{ fontFamily: 'Inter_600SemiBold', marginRight: 4 }}>
                            Já possui uma conta,
                        </TexBottomLogin>
                        <TexBottomLogin style={{ fontFamily: 'Inter_600SemiBold', color: "#7B5BF2" }}
                            onPress={() => nav.navigate("Login")}
                        >
                            login!
                        </TexBottomLogin>
                    </WrapperTextBottomLogin>
                </ScrollView>
            </WrapperSignup>
            {/* } */}
            <StatusBar barStyle="light-content" backgroundColor="#09184D" translucent />
        </SafeAreaView>
    )
};
