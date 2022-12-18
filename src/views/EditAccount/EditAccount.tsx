import {
    WrapperTop,
    WrapperMain,
    TextTop,
    ContainerInfoOptions,
    ButtonGoback,
    TextContainerInfoNameEmail,
    TextContainerInfoPhone,
    TextContainerInfoAddress,
    ButtonInput,
    ButtonOpacity,
    TextButtonSave,
    ContainerFormModal,
    FormModal,
    TextTopModal,
    InputModal,
    ContainerInputsModal,
    ModalShowPassword,
    ContainerFormShowPassword,
    FormModalPassword
} from './EditAccount_Styled';

import styles from './EditAccount_Styled';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import {
    Modal,
    Keyboard,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Platform,
    ScrollView
} from 'react-native';

import { useState } from 'react';

import {
    Octicons,
    Feather
} from '@expo/vector-icons';

import IconMyAccount from '../../assets/icon-my-account.svg';
import IconEmailAccount from '../../assets/icon-email-account.svg';
import IconPhoneAccount from '../../assets/icon-phone-account.svg';
import IconAddress from '../../assets/icon-address-account.svg';
import IconPasswordInfo from '../../assets/icon-password-info.svg';
import IconCloseModal from '../../assets/icon-close.svg';


export default function EditAccount() {
    const nav = useNavigation();
    const [showPassword, setShowPassword] = useState(true);
    const [openModal, setOpenModal] = useState(false);
    const [openModalPassword, setOpenModalPassword] = useState(false);
    const [valuePassword, setValuePassword] = useState("12345678");
    const [valueShowPassword, setValueShowPassword] = useState("");
    const [valueFormRoad, setValueFormRoad] = useState("");
    const [valueFormDistrict, setValueFormDistrict] = useState("");
    const [valueFormComplement, setValueFormComplement] = useState("");
    const [valueFormPost, setValueFormPost] = useState("");
    const [valueFormNumber, setValueFormNumber] = useState("");
    const [valueFormCity, setValueFormCity] = useState("");
    const [valueFormState, setValueFormState] = useState("");

    const comparePassword = () => {
        if (valuePassword === valueShowPassword) {
            setShowPassword(false)
            setOpenModalPassword(false)
            return
        }
    }

    const hadleSubmitForm = () => {
        const data = {
            road: valueFormRoad,
            district: valueFormDistrict,
            complement: valueFormComplement,
            post: valueFormComplement,
            number: valueFormNumber,
            city: valueFormCity,
            state: valueFormState
        };
        setOpenModal(false);
        console.log(data);
    }

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "flex-start", backgroundColor: "#09184D", position: "relative" }}>
            <Modal
                animationType='fade'
                transparent={true}
                visible={openModal}
            >
                <ContainerFormModal>
                    <ButtonGoback
                        onPress={() => setOpenModal(!openModal)}
                    >
                        <Octicons
                            name="arrow-left"
                            size={34}
                            color="#EDF2FA" />
                    </ButtonGoback>
                    <TextTopModal>Informe seu endereço principal</TextTopModal>
                    <KeyboardAvoidingView
                        style={styles.formModal}
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                        keyboardVerticalOffset={0}
                    >
                        <ScrollView contentContainerStyle={styles.scrollFormModal} showsVerticalScrollIndicator={false}>
                            <FormModal>
                                <InputModal
                                    style={styles.colorInputModal}
                                    onChangeText={setValueFormRoad}
                                    value={valueFormRoad}
                                    placeholder="Rua 05"
                                    placeholderTextColor="rgba(128, 128, 133, 0.5)"
                                />
                                <InputModal
                                    style={styles.colorInputModal}
                                    onChangeText={setValueFormDistrict}
                                    value={valueFormDistrict}
                                    placeholder="Santo Onofre"
                                    placeholderTextColor="rgba(128, 128, 133, 0.5)"
                                />
                                <InputModal
                                    style={styles.colorInputModal}
                                    onChangeText={setValueFormComplement}
                                    value={valueFormComplement}
                                    placeholder="Próximo ao shopping"
                                    placeholderTextColor="rgba(128, 128, 133, 0.5)"
                                />
                                <ContainerInputsModal>
                                    <InputModal
                                        style={styles.inputCepNumber}
                                        onChangeText={setValueFormPost}
                                        value={valueFormPost}
                                        placeholder="65110-000"
                                        placeholderTextColor="rgba(128, 128, 133, 0.5)"
                                    ></InputModal>
                                    <InputModal
                                        style={styles.inputCepNumber}
                                        onChangeText={setValueFormNumber}
                                        value={valueFormNumber}
                                        placeholder="300"
                                        placeholderTextColor="rgba(128, 128, 133, 0.5)"
                                    ></InputModal>
                                </ContainerInputsModal>
                                <ContainerInputsModal>
                                    <InputModal
                                        style={styles.inputCity}
                                        onChangeText={setValueFormCity}
                                        value={valueFormCity}
                                        placeholder="São Luís"
                                        placeholderTextColor="rgba(128, 128, 133, 0.5)"
                                    />
                                    <InputModal
                                        style={styles.inputState}
                                        onChangeText={setValueFormState}
                                        value={valueFormState}
                                        placeholder="MA"
                                        placeholderTextColor="rgba(128, 128, 133, 0.5)"
                                    />
                                </ContainerInputsModal>
                            </FormModal>
                        </ScrollView>
                    </KeyboardAvoidingView>
                    <ButtonOpacity
                        activeOpacity={0.7}
                        onPress={() => hadleSubmitForm()}
                        style={styles.buttonSave}>
                        <TextButtonSave>SALVAR</TextButtonSave>
                    </ButtonOpacity>
                </ContainerFormModal>

            </Modal>
            <Modal
                animationType='fade'
                transparent={true}
                visible={openModalPassword}
            >
                <ModalShowPassword>
                    <ContainerFormShowPassword>
                        <TextTopModal>Informe a sua senha atual</TextTopModal>
                        <FormModalPassword>
                            <InputModal
                                value={showPassword === true ? valueShowPassword : ""}
                                onChangeText={setValueShowPassword}
                                secureTextEntry={false}
                            />
                            <ButtonOpacity
                                onPress={() => comparePassword()}
                                style={styles.buttonSave}>
                                <TextButtonSave>VER</TextButtonSave>
                            </ButtonOpacity>
                        </FormModalPassword>
                    </ContainerFormShowPassword>
                    <IconCloseModal
                        onPress={() => setOpenModalPassword(!openModalPassword)}
                        style={styles.buttonCloseModalPassword}
                    />
                </ModalShowPassword>
            </Modal>
            <WrapperTop>
                <ButtonGoback
                    onPress={() => nav.goBack()}
                >
                    <Octicons
                        name="arrow-left"
                        size={34}
                        color="#EDF2FA" />
                </ButtonGoback>
                <TextTop>Editar meus dados</TextTop>
            </WrapperTop>
            <WrapperMain>
                <ScrollView contentContainerStyle={styles.scrollInput} showsVerticalScrollIndicator={false}>
                    <ContainerInfoOptions>
                        <IconMyAccount
                            style={styles.iconsInfo}
                        />
                        <TextContainerInfoNameEmail>
                            Dionnatan Alves Pereira
                        </TextContainerInfoNameEmail>
                    </ContainerInfoOptions>
                    <ContainerInfoOptions>
                        <IconEmailAccount
                            style={styles.iconsInfo}
                        />
                        <TextContainerInfoNameEmail>
                            dionnatan@email.com
                        </TextContainerInfoNameEmail>
                    </ContainerInfoOptions>
                    <ContainerInfoOptions>
                        <IconPhoneAccount
                            style={styles.iconsInfo}
                        />
                        <TextContainerInfoPhone>
                            (98) 99999-9999
                        </TextContainerInfoPhone>
                    </ContainerInfoOptions>
                    <ContainerInfoOptions>
                        <IconAddress
                            style={styles.iconsInfo}
                        />
                        <ButtonInput
                            onPress={() => setOpenModal(!openModal)}
                            activeOpacity={0.6}
                        >
                            <TextContainerInfoAddress>
                                Rua 05, bairro Santo Onofre,
                                São Luís - MA, próximo ao shopping
                            </TextContainerInfoAddress>
                        </ButtonInput>
                    </ContainerInfoOptions>
                    <KeyboardAvoidingView
                        style={styles.input}
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                        keyboardVerticalOffset={90}
                    >
                        <IconPasswordInfo
                            style={styles.iconsInfo}
                        />

                        <TextContainerInfoPhone
                            value={valuePassword}
                            onChangeText={setValuePassword}
                            secureTextEntry={showPassword}
                        >
                        </TextContainerInfoPhone>

                        <ButtonOpacity
                            style={styles.eyeIcon}
                        >
                            <Feather
                                onPress={() => showPassword ? setOpenModalPassword(!openModalPassword) : setShowPassword(!showPassword)}
                                name={showPassword ? "eye-off" : "eye"}
                                size={26}
                                color="#808085" />
                        </ButtonOpacity>
                    </KeyboardAvoidingView>
                    <ButtonOpacity
                        activeOpacity={0.7}
                        style={styles.buttonSave}>
                        <TextButtonSave>SALVAR</TextButtonSave>
                    </ButtonOpacity>
                </ScrollView>
            </WrapperMain>
        </SafeAreaView >
    )
};