import {
    ContentInfoService,
    ConteinerValues,
    ConteinerTitles,
    TitleService,
    ButtonSchedule,
    TextSchedule,
    TextValue
} from './ViewServiceCompany_Styled';

export default function ViewServiceCompany() {

    return (
        <ContentInfoService>
            <ConteinerTitles>
                <TitleService>Corte simples</TitleService>
                <ButtonSchedule>
                    <TextSchedule>Agendar</TextSchedule>
                </ButtonSchedule>
            </ConteinerTitles>
            <ConteinerValues>
                <TextValue>R$ 30,00</TextValue>
            </ConteinerValues>
        </ContentInfoService>
    )
}