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
import { useRoute } from '@react-navigation/native';
import { useState } from 'react';

import {
    Octicons
} from '@expo/vector-icons';
import api from '../../services/api';
import { Alert, StatusBar } from 'react-native';
import Loading from '../../components/Loading/Loading';

interface Params {
    name: string;
    email: string;
    password: string;
}


export default function ConfirmRegister() {
    const nav = useNavigation();
    const route = useRoute();
    const { name, email, password } = route.params as Params
    const [inputCodeOne, setInputCodeOne] = useState("");
    const [inputCodeTwo, setInputCodeTwo] = useState("");
    const [inputCodeThree, setInputCodeThree] = useState("");
    const [inputCodeFour, setInputCodeFour] = useState("");
    const [textTop, setTextTop] = useState("Você receberá um código de confirmação no seu e-mail");
    const [confirm, setConfirm] = useState(false);
    const [awaitLoading, setAwaitLoading] = useState(false);

    async function sendMail(name: string, email: string) {
        try {
            const response = await api.post('/sendmail', {
                name,
                email,
            });
            Alert.alert('Código', 'Novo código enviado');
        } catch (error: any) {
            return Alert.alert('Algo deu errado', error.response.data.message);
        }
    }

    async function signup() {
        if (!inputCodeOne || !inputCodeTwo || !inputCodeThree || !inputCodeFour) {
            return Alert.alert('Algo deu errado', "Você precisa informar o código recebido por email");
        }
        const sendCode = `${inputCodeOne}${inputCodeTwo}${inputCodeThree}${inputCodeFour}`
        setAwaitLoading(true);
        try {
            const response = await api.post('/user', {
                name,
                email,
                password,
                code: sendCode
            });
            setTextTop(response.data.message);
            setAwaitLoading(false);
            setConfirm(true);

        } catch (error: any) {
            setAwaitLoading(false);
            // if (error.response.status <= 422) {
            //     return Alert.alert('Algo deu errado', error.response.data.message);
            // }
            return Alert.alert('Algo deu errado', error.response.data.message);
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {
                awaitLoading
                    ? <Loading />
                    : <WrapperConfirmRegister>
                        <ButtonGoback
                            onPress={() => nav.goBack()}
                        >
                            <Octicons
                                name="arrow-left"
                                size={34}
                                color="#EDF2FA" />
                        </ButtonGoback>
                        <TextTopConfirmRegister>
                            {textTop}
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
                                    onPress={() => signup()}
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
                            <TexBottomConfirmRegister
                                onPress={() => sendMail(name, email)}
                            >
                                Reenviar código
                            </TexBottomConfirmRegister>
                        }
                    </WrapperConfirmRegister>
            }
            <StatusBar barStyle="light-content" backgroundColor="#09184D" translucent />
        </SafeAreaView>
    )
};