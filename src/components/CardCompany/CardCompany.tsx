import {
    CardCompanyMain,
    ContainerImage,
    ContainerContent,
    ContentTitle,
    ContentBottom,
    ButtonView,
    TextButtonView
} from './CardCompany_Styled';

import { TouchableOpacity } from 'react-native';
import { style } from './CardCompany_Styled'

import ImageCompanies from '../../assets/image-companies.svg';
import IconStartEmpty from '../../assets/icon-start-empty.svg';
import IconStart from '../../assets/icon-start.svg';

import api from '../../services/api';

import { useEffect, useState } from 'react';
import { ICompanies } from '../../types';

interface CompanyProps {
    name: string;
    favorite?: string;
}

export default function CardCompany({ name, favorite }: CompanyProps) {
    const [companies, setCompanies] = useState<ICompanies[]>()

    useEffect(() => {
        api.get('/companies').then(response => {
            setCompanies(response.data)
        });
    }, []);

    return (
        <CardCompanyMain>
            <ContainerImage>
                <ImageCompanies
                    style={style.imageCard}
                />
            </ContainerImage>
            <ContainerContent>
                <ContentTitle>{name}</ContentTitle>
                <ContentBottom>
                    <TouchableOpacity
                        activeOpacity={0.7}
                    >
                        {
                            favorite
                                ? <IconStart
                                    style={style.startEmpty}
                                />
                                : <IconStartEmpty
                                    style={style.startEmpty}
                                />
                        }
                    </TouchableOpacity>
                    <ButtonView
                        activeOpacity={0.7}
                    >
                        <TextButtonView>ver</TextButtonView>
                    </ButtonView>
                </ContentBottom>
            </ContainerContent>
        </CardCompanyMain>
    )
}