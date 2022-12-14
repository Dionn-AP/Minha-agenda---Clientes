import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';


export const WrapperTop = styled.View`
    display: flex;
    align-items: flex-end;
    position: relative;
    flex-direction: row;
    justify-content: space-between;
    height: 10%;
    width: 100%;
    padding: 0 5%;
    background-color: #09184D;
`

export const WrapperMain = styled.View`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    height: 90%;
    width: 100%;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    background-color: #EDF2FA;
    padding: 1% 6% 0;
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
    padding: 18px 0;
    border-bottom-width: 1px;
    border-bottom-color: #09184D;
    margin-bottom: 30px;
`

export const TextNotHistoric = styled.Text`
    text-align: center;
    color: #09184D;
    font-weight: 600;
    font-size: 16px;
`

export const ButtonGoback = styled.TouchableOpacity`
    position: absolute;
    top: 5px;
    left: 17px;
`

export const ButtonOpacity = styled.TouchableOpacity`
    
`


export const styles = StyleSheet.create({
    iconUser: {
        width: 35,
        height: 35,
        marginBottom: 15
    }
});