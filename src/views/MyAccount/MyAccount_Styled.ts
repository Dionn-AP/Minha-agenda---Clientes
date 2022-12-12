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
    padding: 10% 6% 0;
`

export const TextTop = styled.Text`
    font-weight: 600;
    font-size: 20px;
    color: #EDF2FA;
    margin-bottom: 3%;
`

export const ContainerInfoOptions = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    margin-bottom: 12%;
`

export const TextContainerInfoOptions = styled.Text`
    color: #09184D;
    font-weight: 600;
    font-size: 18px;
`

export const TextBottomversion = styled.Text`
    text-align: center;
    position: absolute;
    bottom: 3%;
    color: rgba(128, 128, 133, 0.8);
    font-weight: 600;
    font-size: 12px;
`


const styles = StyleSheet.create({
    iconsInfo: {
        height: 32,
        width: 32,
        marginRight: 14
    }
});

export default styles;