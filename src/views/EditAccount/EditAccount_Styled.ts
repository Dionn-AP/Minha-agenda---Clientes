import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';


export const WrapperTop = styled.View`
    display: flex;
    position: relative;
    align-items: flex-end;
    flex-direction: row;
    justify-content: space-between;
    height: 82px;
    width: 100%;
    padding: 0 5%;
    background-color: #09184D;
`

export const ButtonGoback = styled.TouchableOpacity`
    position: absolute;
    top: 5px;
    left: 17px;
`

export const WrapperMain = styled.View`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    background-color: #EDF2FA;
    padding: 10px 6% 0 6%;
`

export const TextTop = styled.Text`
    font-weight: 600;
    font-size: 20px;
    color: #EDF2FA;
    margin-bottom: 3%;
`

export const ContainerInfoOptions = styled.View`
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    margin-bottom: 12%;
`

export const TextChangePassword = styled.Text`
    text-align: left;
    color: #09184D;
    font-weight: 600;
    font-size: 16px;
    width: 84%;
    padding-left: 10px;
`

export const TextContainerInfoNameEmail = styled.Text`
    text-align: left;
    color: rgba(128, 128, 133, 0.5);
    background-color: rgba(128, 128, 133, 0.07);
    font-weight: 600;
    font-size: 16px;
    border: 1px solid #FAFAFA;
    border-radius: 8px;
    padding: 12px 10px;
    width: 84%;
`

export const TextContainerInfoPhone = styled.TextInput`
    text-align: left;
    color: #808085;
    background-color: #FFF;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.4px;
    width: 84%;
    border-radius: 8px;
    padding: 12px 10px;
`

export const TextContainerInfoAddress = styled.Text`
    text-align: left;
    color: #09184D;
    background-color: #FFF;
    font-weight: 600;
    font-size: 14px;
    width: 100%;
    border: .5px solid #09184D;
    border-radius: 8px;
    padding: 12px 10px;
`

export const ButtonInput = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    width: 84%;
`

export const TextButtonSave = styled.Text`
    color: #EDF2FA;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 16px;
`

export const ContainerFormModal = styled.View`
    flex: 1;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: #09184D;
    padding: 35px 5% 10% 5%;
`

export const FormModal = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
`

export const InputModal = styled.TextInput`
    position: relative;
    width: 100%;
    padding: 12px 8px;
    border-radius: 8px;
    color: #808085;
    background-color: #EDF2FA;
    margin-bottom: 35px;
`

export const TextTopModal = styled.Text`
    color: #EDF2FA;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 10%;
`

export const ContainerInputsModal = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`

export const ModalLoadData = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: rgba(237, 242, 250, 0.5);
    padding: 7%;
`

export const LoadCircular = styled.View`
    height: auto;
    width: auto;
`

export const ModalShowPassword = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: rgba(237, 242, 250, 0.5);
    padding: 7%;
`

export const ContainerFormShowPassword = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #09184D;
    height: auto;
    width: 100%;
    border-radius: 16px;
    padding: 20px 20px 24px;
`

export const FormModalPassword = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: auto;
    width: 100%;
`

export const LoadSuccessChangePassword = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 270px;
    width: 100%;
    border-radius: 16px;
`

export const ButtonOpacity = styled.TouchableOpacity`
    
`

export const Error = styled.Text`
    color: #F40000;
    font-weight: 400;
    font-size: 14px;
    position: absolute;
    top: 40%;
`


const styles = StyleSheet.create({
    iconsInfo: {
        height: 32,
        width: 32,
        marginRight: 14
    },
    eyeIcon: {
        position: 'absolute',
        top: "24%",
        right: "3%"
    },
    buttonSave: {
        backgroundColor: "#7B5BF2",
        alignItems: "center",
        paddingVertical: 15,
        paddingHorizontal: 70,
        borderRadius: 8
    },
    buttonClose: {
        marginTop: "10%",
        height: 15,
        width: 15
    },
    buttonCloseModalPassword: {
        marginTop: 30,
        height: 15,
        width: 15
    },
    colorInputModal: {
        color: "#808085",
        fontSize: 16
    },
    inputCepNumber: {
        width: "45%",
        fontSize: 16
    },
    inputCity: {
        width: "60%",
        fontSize: 16
    },
    inputState: {
        width: "30%",
        fontSize: 16
    },
    inputError: {
        borderColor: "#F40000",
        borderWidth: 2,
        borderStartColor: "solid"
    },
    scrollInput: {
        paddingTop: 30,
        alignItems: "center"
    },
    formModal: {
        height: "80%",
        width: "100%",
        marginBottom: "8%"
    },
    scrollFormModal: {
        height: 420,
        width: "100%",
        alignItems: "center"
    },
    input: {
        position: "relative",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        marginBottom: 40
    },
    loadSucess: {
        height: 32,
        width: 32,
    }
});

export default styles;