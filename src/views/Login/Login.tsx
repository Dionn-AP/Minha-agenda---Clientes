import {
    WrapperLogin,
    FormLogin,
    TextTopLogin,
    WrapperInputs,
    InputsLogin,
    ButtonLogin,
    TextButtonLogin,
    TextForgot,
    TexBottomLogin,
    WrapperTextBottomLogin,
    ButtonInputs
} from './Login_Styled';

import {
    useFonts,
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
} from '@expo-google-fonts/inter';

import {
    MaterialCommunityIcons,
    Feather,
    MaterialIcons
} from '@expo/vector-icons';

import { useState } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import { useAuth } from '../../context/Auth';
import Loading from '../../components/Loading/Loading';


export default function Login() {
    const nav = useNavigation();
    const { signIn } = useAuth();

    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_800ExtraBold
    });

    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [showPassword, setShowPassword] = useState(true);

    if (!fontsLoaded) {
        return (
            <Loading />
        );
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <WrapperLogin>
                <TextTopLogin style={{fontFamily: 'Inter_700Bold'}}>LOGIN</TextTopLogin>
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
                        <ButtonInputs style={{ top: "18%", right: 10 }}
                            onPress={() => setShowPassword(!showPassword)}
                        >
                            <Feather
                                name={showPassword ? "eye-off" : "eye"}
                                size={28}
                                color="#808085" />
                        </ButtonInputs>
                    </WrapperInputs>

                    <ButtonLogin
                        onPress={() => signIn(inputEmail, inputPassword)}
                        activeOpacity={0.7}
                    >
                        <TextButtonLogin style={{fontFamily: 'Inter_600SemiBold'}}>ENTRAR</TextButtonLogin>
                    </ButtonLogin>
                </FormLogin>
                <TextForgot
                    onPress={() => nav.navigate("Recuperar Senha")}
                    style={{fontFamily: 'Inter_600SemiBold'}}
                >
                    Esqueci minha senha
                </TextForgot>
                <WrapperTextBottomLogin>
                    <TexBottomLogin style={{ fontFamily: 'Inter_600SemiBold', marginRight: 4 }}>
                        Novo por aqui,
                    </TexBottomLogin>
                    <TexBottomLogin style={{ fontFamily: 'Inter_600SemiBold', color: "#7B5BF2" }}
                        onPress={() => nav.navigate("Signup")}
                    >
                        cadastre-se!
                    </TexBottomLogin>
                </WrapperTextBottomLogin>
                
            </WrapperLogin>
            <StatusBar barStyle="light-content" backgroundColor="#09184D" translucent />
        </SafeAreaView>
    )
};