import styled from 'styled-components/native';


export const WrapperConfirmRegister = styled.View`
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    background-color: #09184D;
    padding: 25% 6% 0 6%;
`

export const FormConfirmRegister = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const TextTopConfirmRegister = styled.Text`
    font-weight: 600;
    font-size: 20px;
    color: #EDF2FA;
    margin-bottom: 20%;
    letter-spacing: 1px;
    text-align: center;
`

export const WrapperInputsConfirmRegister = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: auto;
    position: relative;
    margin-bottom: 25%;
`

export const InputsConfirmRegister = styled.TextInput`
    width: 20%;
    color: #EDF2FA;
    background-color: #09184D;
    font-size: 35px;
    font-weight: 600;
    text-align: center;
    padding: 0 0 10px 0;
    border-radius: 1px;
    border-bottom-width: 3px;
    border-color: #EDF2FA;
`

export const ButtonConfirmRegister = styled.TouchableHighlight`
    padding: 17px 0;
    border-radius: 8px;
    background-color: #7B5BF2;
    align-items: center;
    width: 100%;
    margin-bottom: 12%;
`

export const TextButtonConfirmRegister = styled.Text`
    font-weight: 600;
    font-size: 16px;
    color: #EDF2FA;
`

export const TexBottomConfirmRegister = styled.Text`
    font-weight: 600;
    font-size: 18px;
    color: #EDF2FA;
    margin-bottom: 80px;
    letter-spacing: 0.1px;
`

export const ButtonGoback = styled.TouchableOpacity`
    position: absolute;
    top: 15px;
    left: 17px;
`

export const ContainerImageSuccess = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #EDF2FA;
    height: 290px;
    width: 290px;
    border-radius: 180px;
    margin-bottom: 12%;
`

export const ImageConfirmSuccess = styled.Image`
    z-index: 2;
    height: 220px;
    width: 220px;
`