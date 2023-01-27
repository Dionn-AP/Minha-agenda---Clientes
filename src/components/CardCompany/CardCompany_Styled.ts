import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const CardCompanyMain = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;

    height: 140px;
    width: 100%;
    border: 2px solid #09184D;
    border-radius: 16px;
    margin-bottom: 12px;
`

export const ContainerImage = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 35%;
    border: 2px solid #09184D;
    border-radius: 18px;
`

export const ContainerContent = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 61.5%;
`

export const ContentTitle = styled.Text`
    text-align: left;
    color: #09184D;
    font-weight: 600;
    font-size: 18px;
`

export const ContentBottom = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: auto;
    width: 100%;
    padding-bottom: 4px;
`

export const ButtonView = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #7B5BF2;
    border-radius: 16px;
    padding: 3px 8px;
`

export const TextButtonView = styled.Text`
    font-weight: 500;
    font-size: 10px;
    color: #EDF2FA;
    text-transform: uppercase;
`


export const style = StyleSheet.create({
    imageCard: {
        height: "100%",
        width: "100%"
    }
});