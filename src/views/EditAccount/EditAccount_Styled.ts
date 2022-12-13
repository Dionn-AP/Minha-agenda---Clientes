import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';


export const WrapperTop = styled.View`
    display: flex;
    position: relative;
    align-items: flex-end;
    flex-direction: row;
    justify-content: space-between;
    height: 10%;
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
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 90%;
    width: 100%;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    background-color: #EDF2FA;
    padding: 10% 6% 0 6%;
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

export const TextContainerInfoOptions = styled.Text`
    text-align: left;
    color: #09184D;
    font-weight: 600;
    font-size: 18px;
    width: 84%;
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

export const ContainerModal = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: rgba(237, 242, 250, 0.5);
    padding: 3%;
`

export const ContainerFormModal = styled.View`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #09184D;
    height: 72%;
    width: 100%;
    border-radius: 16px;
    padding: 5% 5% 20% 5%;
`

export const FormModal = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    border: 1px solid white;
`

export const InputModal = styled.TextInput`
    width: 100%;
    padding: 3% 8px;
    border-radius: 8px;
    background-color: #EDF2FA;
`

export const TextTopModal = styled.Text`
    color: #EDF2FA;
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 6%;
`

export const ContainerInputsModal = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
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
    justify-content: space-between;
    background-color: #09184D;
    height: 30%;
    width: 100%;
    border-radius: 16px;
    padding: 7%;
`

export const FormModalPassword = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 75%;
    width: 100%;
`

export const ButtonOpacity = styled.TouchableOpacity`
    
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
        paddingVertical: 16,
        paddingHorizontal: 80,
        borderRadius: 8
    },
    buttonClose: {
        position: "absolute",
        bottom: "7%",
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
    }
});

export default styles;