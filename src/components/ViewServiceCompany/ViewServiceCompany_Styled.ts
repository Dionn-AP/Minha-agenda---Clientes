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
    padding: 1% 6% 110px;
`

export const TextCenterViewService = styled.Text`
    text-align: center;
    color: #09184D;
    font-weight: 600;
    font-size: 18px;
    text-transform: uppercase;
    padding: 16px 0;
    margin-bottom: 35px;
`

export const ContentInfoService = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 12px 0;
    height: 110px;
    width: 100%;
    border-radius: 3px;
    margin-bottom: 40px;
    border-bottom-width: 1px;
    border-bottom-color: rgba(9, 24, 77, 0.3);
`

export const ConteinerTitles = styled.View`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 70%;
    align-items: flex-start;
    justify-content: space-between;
    box-sizing: border-box;
`

export const ConteinerValues = styled.View`
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: flex-end;
    justify-content: space-between;
`

export const TitleService = styled.Text`
    font-size: 16px;
    font-weight: 500;
    color: #09184d;
    margin-bottom: 20px;
`

export const TextValue = styled.Text`
    font-size: 14px;
    font-weight: 500;
    color: #09184d;
    margin-bottom: 20px;
`

export const ButtonSchedule = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px 10px;
    border-radius: 18px;
    background-color: #7B5BF2;
`

export const TextSchedule = styled.Text`
    font-size: 14px;
    font-weight: 400;
    color: #EDF2FA;
    margin-bottom: 3px;
`

export const TextEmpty = styled.Text`

`
