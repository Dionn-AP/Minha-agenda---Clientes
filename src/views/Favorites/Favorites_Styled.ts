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

export const TextNotFavorites = styled.Text`
    color: #09184D;
    font-weight: 600;
    font-size: 16px;
`

export const ButtonGoback = styled.TouchableOpacity`
    position: absolute;
    top: 5px;
    left: 17px;
`

export const WrapperEmptyContent = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 100%;
`

export const ButtonForServices = styled.TouchableHighlight`
    padding: 17px 28px;
    border-radius: 8px;
    background-color: #7B5BF2;
    align-items: center;
    margin-top: 20px;
`

export const TextButtonForServices = styled.Text`
    text-transform: uppercase;
    font-weight: 600;
    font-size: 16px;
    color: #EDF2FA;
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