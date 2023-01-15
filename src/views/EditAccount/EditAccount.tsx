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
    ModalLoadData,
    LoadCircular,
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
    ScrollView,
    Animated,
    Easing
} from 'react-native';

import React, { useEffect, useState } from 'react';

import {
    Octicons,
    Feather,
    AntDesign
} from '@expo/vector-icons';

import IconMyAccount from '../../assets/icon-my-account.svg';
import IconEmailAccount from '../../assets/icon-email-account.svg';
import IconPhoneAccount from '../../assets/icon-phone-account.svg';
import IconAddress from '../../assets/icon-address-account.svg';
import IconPasswordInfo from '../../assets/icon-password-info.svg';
import IconCloseModal from '../../assets/icon-close.svg';
import LoadSuccess from '../../assets/icon-load-successfull.svg';
import CircularProgress from '../../assets/icon-progress-circular.svg';
import { useAuth } from '../../context/Auth';
import { getHeaders } from '../../utils/services';
import api from '../../services/api';
import { ISignup } from '../../types';

export default function EditAccount() {
    const nav = useNavigation();
    const { authData } = useAuth();
    const [user, setUser] = useState<ISignup>();
    const [load, setLoad] = useState(true);

    const [showPassword, setShowPassword] = useState(true);
    const [openModal, setOpenModal] = useState(false);
    const [modalLoadData, setModalLoadData] = useState(false);
    const [loadProgress, setLoadProgress] = useState(false);
    const [openModalPassword, setOpenModalPassword] = useState(false);

    const [valuePassword, setValuePassword] = useState("********");
    const [valueShowPassword, setValueShowPassword] = useState("");
    const [valueFormEmail, setValueFormEmail] = useState("");
    const [valueFormRoad, setValueFormRoad] = useState("");
    const [valueFormPhone, setValueFormPhone] = useState("");
    const [valueFormDistrict, setValueFormDistrict] = useState("");
    const [valueFormComplement, setValueFormComplement] = useState("");
    const [valueFormPost, setValueFormPost] = useState("");
    const [valueFormNumber, setValueFormNumber] = useState("");
    const [valueFormCity, setValueFormCity] = useState("");
    const [valueFormState, setValueFormState] = useState("");

    const [valueForm, setValueForm] = useState({
        name: "",
        email: "",
        road: "",
        phone: "",
        district: "",
        complement: "",
        post: "",
        number: "",
        city: "",
        state: ""
    })

    async function getUser() {
        try {
            const response = await api.get('/user', getHeaders(authData?.token));
            setLoad(false);
            setValueForm({
                name: response.data.name,
                email: response.data.email,
                road: response.data.road,
                phone: response.data.phone,
                district: response.data.district,
                complement: response.data.complement,
                post: response.data.post,
                number: response.data.number_address,
                city: response.data.city,
                state: response.data.state
            });
            setUser(response.data);
        } catch (error) {
            return error;
        }
    }

    const comparePassword = () => {
        if (valuePassword === valueShowPassword) {
            setShowPassword(false)
            setOpenModalPassword(false)
            return
        }
    }

    async function hadleSubmitForm() {
        setModalLoadData(true);
        try {
            const response = await api.patch(`/user`, {
                name: user?.name,
                email: user?.email,
                phone: valueFormPhone ? valueFormPhone : user?.phone,
                road: valueFormRoad ? valueFormRoad : user?.road,
                district: valueFormDistrict ? valueFormDistrict : user?.district,
                complement: valueFormComplement ? valueFormComplement : user?.complement,
                post: valueFormPost ? valueFormPost : user?.post,
                number_address: valueFormNumber ? valueFormNumber : user?.number_address,
                city: valueFormCity ? valueFormCity : user?.city,
                state: valueFormState ? valueFormState : user?.state
            }, getHeaders(authData?.token));
            setLoadProgress(true);
            setUser(response.data);
            setTimeout(() => {
                setModalLoadData(false);
                setLoadProgress(false);
            }, 1500);
        } catch (error) {
            console.log('signup erro:', error)
            return error;
        }
    }

    const rotationValue = new Animated.Value(0);

    const spin = () => {
        rotationValue.setValue(0)
        Animated.timing(rotationValue, {
            toValue: 1,
            duration: 1500,
            easing: Easing.linear,
            useNativeDriver: false
        }).start(() => spin());
    }
    useEffect(() => {
        spin();
        return (
            spin()
        )
    });

    const rotate = rotationValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    useEffect(() => {
        getUser();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "flex-start", backgroundColor: "#09184D", position: "relative" }}>
            <Modal
                animationType='fade'
                transparent={true}
                visible={modalLoadData}
            >
                <ModalLoadData>
                    {!loadProgress ?
                        <Animated.View style={{ height: "auto", width: "auto", transform: [{ rotate }] }}>
                            <AntDesign name="loading1" size={70} color="#7B5BF2" />
                        </Animated.View>
                        : <LoadSuccess style={styles.loadSucess}/>}
                </ModalLoadData>
            </Modal>
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
                                    placeholder={valueForm.road ? valueForm.road : "Rua"}
                                    placeholderTextColor="rgba(128, 128, 133, 0.7)"
                                />
                                <InputModal
                                    style={styles.colorInputModal}
                                    onChangeText={setValueFormDistrict}
                                    value={valueFormDistrict}
                                    placeholder={valueForm.district ? valueForm.district : "Bairro"}
                                    placeholderTextColor="rgba(128, 128, 133, 0.7)"
                                />
                                <InputModal
                                    style={styles.colorInputModal}
                                    onChangeText={setValueFormComplement}
                                    value={valueFormComplement}
                                    placeholder={valueForm.complement ? valueForm.complement : "Complemento"}
                                    placeholderTextColor="rgba(128, 128, 133, 0.7)"
                                />
                                <ContainerInputsModal>
                                    <InputModal
                                        style={styles.inputCepNumber}
                                        onChangeText={setValueFormPost}
                                        value={valueFormPost}
                                        placeholder={valueForm.post ? valueForm.post : "CEP"}
                                        placeholderTextColor="rgba(128, 128, 133, 0.7)"
                                    ></InputModal>
                                    <InputModal
                                        style={styles.inputCepNumber}
                                        onChangeText={setValueFormNumber}
                                        value={valueFormNumber}
                                        placeholder={valueForm.number ? valueForm.number : "Número"}
                                        placeholderTextColor="rgba(128, 128, 133, 0.7)"
                                    ></InputModal>
                                </ContainerInputsModal>
                                <ContainerInputsModal>
                                    <InputModal
                                        style={styles.inputCity}
                                        onChangeText={setValueFormCity}
                                        value={valueFormCity}
                                        placeholder={valueForm.city ? valueForm.city : "Cidade"}
                                        placeholderTextColor="rgba(128, 128, 133, 0.7)"
                                    />
                                    <InputModal
                                        style={styles.inputState}
                                        onChangeText={setValueFormState}
                                        value={valueFormState}
                                        placeholder={valueForm.state ? valueForm.state : "UF"}
                                        placeholderTextColor="rgba(128, 128, 133, 0.7)"
                                    />
                                </ContainerInputsModal>
                            </FormModal>
                        </ScrollView>
                    </KeyboardAvoidingView>
                    <ButtonOpacity
                        activeOpacity={0.7}
                        onPress={() => setOpenModal(!openModal)}
                        style={styles.buttonSave}>
                        <TextButtonSave>CONFIRMAR</TextButtonSave>
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
                            {!load && valueForm?.name}
                        </TextContainerInfoNameEmail>
                    </ContainerInfoOptions>
                    <ContainerInfoOptions>
                        <IconEmailAccount
                            style={styles.iconsInfo}
                        />
                        <TextContainerInfoNameEmail>
                            {!load && valueForm?.email}
                        </TextContainerInfoNameEmail>
                    </ContainerInfoOptions>
                    <ContainerInfoOptions>
                        <IconPhoneAccount
                            style={styles.iconsInfo}
                        />
                        <TextContainerInfoPhone
                            onChangeText={setValueFormPhone}
                            value={valueFormPhone}
                            placeholder={valueForm.phone ? valueForm.phone : ""}
                            placeholderTextColor="rgba(128, 128, 133, 1)"
                        />
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
                                {!load && `${valueFormRoad ? valueFormRoad : valueForm?.road}, ${valueFormDistrict ? valueFormDistrict : valueForm?.district}, ${valueFormCity ? valueFormCity : valueForm?.city}, ${valueFormComplement ? valueFormComplement : valueForm?.complement}`}
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
                        onPress={() => hadleSubmitForm()}
                        style={styles.buttonSave}>
                        <TextButtonSave>SALVAR</TextButtonSave>
                    </ButtonOpacity>
                </ScrollView>
            </WrapperMain>
        </SafeAreaView >
    )
};