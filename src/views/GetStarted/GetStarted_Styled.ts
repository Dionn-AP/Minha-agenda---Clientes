import 'styled-components/native';
import styled from 'styled-components/native';
import { Dimensions } from "react-native";
const { width } = Dimensions.get('window');

export const WhrapperMain = styled.View`
    flex: 1; 
    align-items: center; 
    justify-content: space-between;
    padding: 10px 0;
    background-color: #09184D;
`
export const TextButtonStarted = styled.Text`
    text-align: center;
    color: #EDF2FA;
    line-height: 28px;
    letter-spacing: 0.2px;
    font-size: 20px;
    font-weight: 600;
    margin-top: 70px;
`

export const ImageSplashOne = styled.Image`
    height: 300px;
    width: 360px;
`

export const FooterTabView = styled.View`
    width: ${width}px; 
    flex-direction: row; 
    justify-content: center; 
    position: absolute; 
    bottom: 35px;
`

export const ButtonTabView = styled.TouchableOpacity`
    width: 12px; 
    height: 12px; 
    border-radius: 6px; 
    margin: 6px;
    background-color: #7B5BF2;
`

export const ButtonStarted = styled.TouchableOpacity`
    padding: 17px 73px;
    border-radius: 8px; 
    margin-top: 50px;
    background-color: #7B5BF2;
`