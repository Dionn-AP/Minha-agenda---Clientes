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
    TextEmpty
} from './ViewServiceCompany_Styled';

import { ActivityIndicator, Alert, ScrollView, TouchableOpacity } from 'react-native';
import { IServices } from '../../types';
import api from '../../services/api';
import { useEffect, useState } from 'react';

interface ServiceProps {
    companyId: string
}

export default function ViewServiceCompany({ companyId }: ServiceProps) {
    const [dataService, setDataService] = useState<IServices[] | any>();

    async function getService(id: string) {
        try {
            const response = await api.get(`/services/${companyId}`);
            setDataService(response.data);
        } catch (error: any) {
            return Alert.alert('Algo deu errado', 'Não foi possível carregar os dados da empresa')
        }
    }

    useEffect(() => {
        getService(companyId);
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
                                >
                                    <ConteinerTitles>
                                        <TitleService>{service?.name_service}</TitleService>
                                        <TouchableOpacity activeOpacity={0.7}>
                                            <ButtonSchedule>
                                                <TextSchedule>agendar</TextSchedule>
                                            </ButtonSchedule>
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
        </WrapperMain>
    )
}