import {
    WrapperMain,
    TextCenterViewService,
    ContentInfoService,
    ConteinerValues,
    ConteinerTitles,
    TitleService,
    ButtonSchedule,
    TextSchedule,
    TextValue,
    ButtonScheduleDisable,
    TextScheduleDisable,
    TextEmpty,
    ContainerSchedulesCount,
    TextSchedulesCount,
    styles
} from './ViewServiceCompany_Styled';

import IconSchedules from '../../assets/icon-schedules.svg';

import { ActivityIndicator, Alert, ScrollView, TouchableOpacity } from 'react-native';
import { IServices } from '../../types';
import api from '../../services/api';
import { useEffect, useState } from 'react';

interface ServiceProps {
    companyId: string
}

export default function ViewServiceCompany({ companyId }: ServiceProps) {
    const [dataService, setDataService] = useState<IServices[] | any>();

    async function getService() {
        try {
            const response = await api.get(`/services/${companyId}`);
            setDataService(response.data);
        } catch (error: any) {
            return Alert.alert('Algo deu errado', 'Não foi possível carregar os dados da empresa')
        }
    }

    useEffect(() => {
        getService();
    }, []);

    return (
        <WrapperMain>
            <TextCenterViewService>
                {dataService?.name_company}
            </TextCenterViewService>
            <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
                {
                    !dataService ?
                        <ActivityIndicator
                            color='#7B5BF2'
                            size={80}
                        />
                        :
                        dataService?.service_types.map((service: any) => {
                            return (
                                <ContentInfoService
                                    key={service?._id}
                                    pointerEvents={!service?.available ? 'none' : 'auto'}
                                    style={{ opacity: service?.available ? 1 : 0.5 }}
                                >
                                    <ConteinerTitles>
                                        <TitleService>{service?.name_service}</TitleService>
                                        <TouchableOpacity activeOpacity={0.7}>
                                            {
                                                service?.available ?
                                                    <ButtonSchedule>
                                                        <TextSchedule>agendar</TextSchedule>
                                                    </ButtonSchedule>
                                                    :
                                                    <ButtonScheduleDisable>
                                                        <TextScheduleDisable>indisponível</TextScheduleDisable>
                                                    </ButtonScheduleDisable>
                                            }

                                        </TouchableOpacity>
                                    </ConteinerTitles>
                                    <ConteinerValues>
                                        <TextValue>{`R$ ${(service?.price / 1000).toFixed(2)}`}</TextValue>
                                        <TextEmpty></TextEmpty>
                                    </ConteinerValues>
                                </ContentInfoService >
                            )
                        })
                }
            </ScrollView>
            <ContainerSchedulesCount>
                <TextSchedulesCount>0</TextSchedulesCount>
                <IconSchedules
                    style={styles.iconSchedule}
                />
            </ContainerSchedulesCount>
        </WrapperMain>
    )
}