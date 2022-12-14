import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';


export const WrapperTop = styled.View`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    padding: 0 5%;
    background-color: #09184D;
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
    padding: 10% 6% 0;
`

export const WrapperInputs = styled.View`
    display: flex;
    width: 100%;
    height: auto;
    position: relative;
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

export const TextNameUser = styled.Text`
    font-weight: 600;
    font-size: 18px;
    color: #EDF2FA;
`

export const ButtonOpacity = styled.TouchableOpacity`
    
`

export const ContainersButtons = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 350px;
    width: 100%;
    padding: 0 2%;
`

export const WrapperButtonsTop = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 50%;
    width: 100%;
`

export const WrapperButtonsBottom = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 50%;
    width: 100%;
`

export const ContainerCardsButtons = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 60%;
    width: 50%;
`

export const TextCardsButtons = styled.Text`
    text-align: center;
    color: #09184D;
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
`

export const CardsButtons = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 95px;
    width: 95px;
    border: 3px solid #09184D;
    border-radius: 16px;
    margin-bottom: 5%;
`

const WidthheightIconsMenu = 35;

const styles = StyleSheet.create({
    iconSearch: {
        width: 25,
        height: 25,
        position: "absolute",
        top: "25%",
        left: "3.5%",
        zIndex: 2
    },
    iconUser: {
        width: 35,
        height: 35
    },
    iconSchedule: {
        width: WidthheightIconsMenu,
        height: WidthheightIconsMenu
    },
    iconFavorites: {
        width: WidthheightIconsMenu,
        height: WidthheightIconsMenu
    },
    iconHistoric: {
        width: WidthheightIconsMenu,
        height: WidthheightIconsMenu
    },
    iconConfigure: {
        width: WidthheightIconsMenu,
        height: WidthheightIconsMenu
    }
});

export default styles;
