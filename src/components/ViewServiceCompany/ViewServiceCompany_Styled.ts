import styled from 'styled-components/native';

export const ContentInfoService = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 4px;
    border-bottom-width: 1px;
    border-bottom-color: #09184D;
`

export const ConteinerTitles = styled.View`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`

export const ConteinerValues = styled.View`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
`

export const TitleService = styled.Text`
    font-size: 18px;
    font-weight: 500;
    color: #09184d;
`

export const ButtonSchedule = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 10px;
    border-radius: 10px;
    background-color: #7B5BF2;
`

export const TextSchedule = styled.Text`
    font-size: 16px;
    font-weight: 400;
    color: #EDF2FA;
`

export const TextValue = styled.Text`
    font-size: 16px;
    font-weight: 500;
    color: #09184d;
`