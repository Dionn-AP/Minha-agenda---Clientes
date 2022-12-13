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
    ContainerModal,
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
import { Modal } from 'react-native';
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
    const [valueRoad, setvalueRoad] = useState("");
    const [valueDistrict, setValueDistrict] = useState("");
    const [valueComplement, setValueComplement] = useState("");
    const [valuePost, setValuePost] = useState("");
    const [valueNumber, setValueNumber] = useState("");
    const [valueCity, setValueCity] = useState("");
    const [valueState, setValueState] = useState("");
    const [valueForm, setValueForm] = useState({
        road: "",
        district: "",
        complement: "",
        post: "",
        number: "",
        city: "",
        state: ""
    });

    let borderColorInputPassword = "none"

    const comparePassword = () => {
        if (valuePassword === valueShowPassword) {
            setShowPassword(false)
            setOpenModalPassword(false)
            return
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "flex-end", backgroundColor: "#09184D", position: "relative" }}>
            <Modal
                animationType='fade'
                transparent={true}
                visible={openModal}
            >
                <ContainerModal>
                    <ContainerFormModal>
                        <TextTopModal>Informe seu endereço principal</TextTopModal>
                        <FormModal>
                            <InputModal
                                style={styles.colorInputModal}
                                value={valueForm.road}
                                placeholder="Rua 05"
                                placeholderTextColor="rgba(128, 128, 133, 0.5)"
                            />
                            <InputModal
                                style={styles.colorInputModal}
                                value={valueForm.district}
                                placeholder="Santo Onofre"
                                placeholderTextColor="rgba(128, 128, 133, 0.5)"
                            />
                            <InputModal
                                style={styles.colorInputModal}
                                value={valueForm.complement}
                                placeholder="Próximo ao shopping"
                                placeholderTextColor="rgba(128, 128, 133, 0.5)"
                            />
                            <ContainerInputsModal>
                                <InputModal
                                    style={styles.inputCepNumber}
                                    value={valueForm.post}
                                    placeholder="65110-000"
                                    placeholderTextColor="rgba(128, 128, 133, 0.5)"
                                ></InputModal>
                                <InputModal
                                    style={styles.inputCepNumber}
                                    value={valueForm.number}
                                    placeholder="300"
                                    placeholderTextColor="rgba(128, 128, 133, 0.5)"
                                ></InputModal>
                            </ContainerInputsModal>
                            <ContainerInputsModal>
                                <InputModal
                                    style={styles.inputCity}
                                    value={valueForm.city}
                                    placeholder="São Luís"
                                    placeholderTextColor="rgba(128, 128, 133, 0.5)"
                                />
                                <InputModal
                                    style={styles.inputState}
                                    value={valueForm.state}
                                    placeholder="MA"
                                    placeholderTextColor="rgba(128, 128, 133, 0.5)"
                                />
                            </ContainerInputsModal>
                            <ButtonOpacity style={styles.buttonSave}>
                                <TextButtonSave>SALVAR</TextButtonSave>
                            </ButtonOpacity>
                        </FormModal>
                    </ContainerFormModal>
                    <IconCloseModal
                        onPress={() => setOpenModal(!openModal)}
                        style={styles.buttonClose}
                    />
                </ContainerModal>
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
                <ContainerInfoOptions style={{ marginBottom: "12%" }}>
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
                </ContainerInfoOptions>
                <ButtonOpacity style={styles.buttonSave}>
                    <TextButtonSave>SALVAR</TextButtonSave>
                </ButtonOpacity>
            </WrapperMain>
        </SafeAreaView>
    )
};