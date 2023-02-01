import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';


export const WrapperMain = styled.View`
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    background-color: #EDF2FA;
    padding: 1% 6% 0;
`

export const Wrapper = styled.View`
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    background-color: #EDF2FA;
`

export const WrapperContent = styled.View`
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 100%;
    padding-bottom: 120px;
`

export const TextNameUser = styled.Text`
    font-weight: 600;
    font-size: 18px;
    color: #EDF2FA;
    margin-bottom: 3%;
`

export const TextCenterView = styled.Text`
    text-align: center;
    color: #09184D;
    font-weight: 600;
    font-size: 18px;
    text-transform: uppercase;
    width: 65%;
    padding: 16px 0;
`

export const TextNotServices = styled.Text`
    text-align: center;
    color: #09184D;
    font-weight: 600;
    font-size: 16px;
`

export const InputSearch = styled.TextInput`
    width: 100%;
    color: #808085;
    background-color: #EDF2FA;
    font-size: 16px;
    border: 1px #09184D;
    padding: 15px 11px 15px 55px;
    border-radius: 16px;
`

export const ButtonGoback = styled.TouchableOpacity`
    z-index: 1;
    position: absolute;
    bottom: 55%;
    left: 17px;
`

export const ViewTextNotFound = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100%;
`

export const ButtonClearSearch = styled.View`
    padding: 12px 20px;
    border-radius: 10px;
    background-color: #7B5BF2;
    align-items: center;
    margin-top: 30px;
`

export const TextButtonClearSearch = styled.Text`
    text-transform: uppercase;
    font-weight: 400;
    font-size: 14px;
    color: #EDF2FA;
`

export const ButtonOpacity = styled.TouchableOpacity`
    
`


export const styles = StyleSheet.create({
    iconUser: {
        width: 35,
        height: 35,
        marginBottom: 15
    },
    iconSearch: {
        width: 25,
        height: 25,
        position: "absolute",
        top: "25%",
        left: "3.5%",
        zIndex: 2
    },
    input: {
        
        width: "100%",
        height: "auto",
        position: "relative",
        marginBottom: 30
}
});