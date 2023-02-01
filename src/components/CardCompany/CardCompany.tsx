import {
    CardCompanyMain,
    ContainerImage,
    ContainerContent,
    ContentTitle,
    ContentBottom,
    ButtonView,
    TextButtonView,
    style
} from './CardCompany_Styled';

import { TouchableOpacity } from 'react-native';

import ImageCompanies from '../../assets/image-companies.svg';
import IconStartEmpty from '../../assets/icon-start-empty.svg';
import IconStart from '../../assets/icon-start.svg';

import api from '../../services/api';

import { getHeaders } from '../../utils/services';
import { useAuth } from '../../context/Auth';

interface CompanyProps {
    name: string;
    idCompany: string;
    favorite?: string;
    openServices: (arg0: string) => void;
    getAllCompanies: () => void
}

export default function CardCompany({ name, favorite, idCompany, getAllCompanies, openServices }: CompanyProps) {
    const { authData } = useAuth();

    async function toggleFavorite(id: string) {
        try {
            await api.patch(`/companies/favorites/${id}`, {}, getHeaders(authData?.token));
            getAllCompanies();
        } catch (error: any) {
            return console.log(error.response.data)
        }
    }

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
                        onPress={() => toggleFavorite(idCompany)}
                    >
                        {
                            favorite
                                ? <IconStart />
                                : <IconStartEmpty />
                        }
                    </TouchableOpacity>
                    <ButtonView
                        onPress={() => openServices(idCompany)}
                        activeOpacity={0.7}
                    >
                        <TextButtonView>ver</TextButtonView>
                    </ButtonView>
                </ContentBottom>
            </ContainerContent>
        </CardCompanyMain>
    )
}