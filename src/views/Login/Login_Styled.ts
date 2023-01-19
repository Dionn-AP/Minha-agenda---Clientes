import styled from 'styled-components/native';

export const WrapperLogin = styled.View`
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    background-color: #09184D;
    padding: 30% 6% 0;
`

export const FormLogin = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

export const TextTopLogin = styled.Text`
    font-weight: 600;
    font-size: 28px;
    color: #EDF2FA;
    margin-bottom: 20%;
    letter-spacing: 1px;
`

export const InputsLogin = styled.TextInput`
    width: 100%;
    color: #808085;
    background-color: #EDF2FA;
    padding: 17px 11px 17px 48px;
    border-radius: 8px;
    margin-bottom: 8%;
`

export const ButtonLogin = styled.TouchableHighlight`
    padding: 17px 0;
    border-radius: 8px;
    background-color: #7B5BF2;
    align-items: center;
    width: 100%;
    margin-bottom: 7.5%;
`

export const WrapperInputs = styled.View`
    display: flex;
    width: 100%;
    height: auto;
    position: relative;
`

export const ButtonInputs = styled.TouchableOpacity`
    position: absolute;
    top: 14%;
    opacity: 0.7;
`

export const TextButtonLogin = styled.Text`
    font-weight: 600;
    font-size: 16px;
    color: #EDF2FA;
`

export const TextForgot = styled.Text`
    font-weight: 600;
    font-size: 14px;
    color: #EDF2FA;
    margin-bottom: 12%;
`

export const WrapperTextBottomLogin = styled.View`
    display: flex;
    flex-direction: row;
`

export const TexBottomLogin = styled.Text`
    font-weight: 600;
    font-size: 18px;
    color: #EDF2FA;
    letter-spacing: 0.1px;
`