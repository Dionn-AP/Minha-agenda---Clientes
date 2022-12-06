import {
    WrapperRecveryPassword,
    FormRecoveryPassword,
    TextTopRecoveryPassword,
    TexBottomRecoveryPassword,
    TextButtonRecoveryPassword,
    InputsRecoveryPassword,
    WrapperInputsRecoveryPassword,
    ButtonRecoveryPassword,
    ButtonInputs,
    ButtonGoback
} from './RecoveryPassword_Styled';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';

import {
    MaterialCommunityIcons,
    Octicons
} from '@expo/vector-icons';

export default function RecoveryPassword() {
    const nav = useNavigation();
    const [inputEmail, setInputEmail] = useState("");

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <WrapperRecveryPassword>
                <ButtonGoback
                    onPress={() => nav.goBack()}
                >
                    <Octicons 
                    name="arrow-left" 
                    size={34} 
                    color="#EDF2FA" />
                </ButtonGoback>
                <TextTopRecoveryPassword>
                    Recuperar senha
                </TextTopRecoveryPassword>
                <FormRecoveryPassword>
                    <WrapperInputsRecoveryPassword>
                        <InputsRecoveryPassword
                            onChangeText={setInputEmail}
                            value={inputEmail}
                            placeholder='Email'
                            placeholderTextColor={"rgba(128, 128, 133, 0.5)"}
                            autoCapitalize="none"
                        />
                        <ButtonInputs>
                            <MaterialCommunityIcons
                                name="email-outline"
                                size={34} color="#808085"
                            />
                        </ButtonInputs>
                    </WrapperInputsRecoveryPassword>
                    <TexBottomRecoveryPassword>
                        Por favor, informe seu email
                    </TexBottomRecoveryPassword>
                    <ButtonRecoveryPassword>
                        <TextButtonRecoveryPassword>ENVIAR</TextButtonRecoveryPassword>
                    </ButtonRecoveryPassword>
                </FormRecoveryPassword>
            </WrapperRecveryPassword>
        </SafeAreaView>
    )
};