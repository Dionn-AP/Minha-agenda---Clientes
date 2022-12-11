import 'styled-components/native';
import styled from 'styled-components/native';
import { Dimensions } from "react-native";
const { width } = Dimensions.get('window');


export const WhrapperMain = styled.View`
    flex: 1; 
    align-items: center; 
    justify-content: flex-start;
    background-color: #09184D;
    padding: 0 10px;
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

export const TextButtonStarted = styled.Text`
    color: #EDF2FA;
    font-size: 16px;
    font-weight: 600;
`

export const ButtonStarted = styled.TouchableOpacity`
    align-items: center;
    padding: 17px 0;
    border-radius: 8px;
    background-color: #7B5BF2;
`

export const ContainerButton = styled.View`
    display: flex;
    width: 100%;
    height: auto;
    padding: 0 14%;
    margin-bottom: 25%;
`