import {
    WrapperTop,
    WrapperMain,
    TextTop,
    ContainerInfoOptions,
    TextContainerInfoOptions,
    ButtonGoback,
} from './MyInfo_Styled';

import styles from './MyInfo_Styled';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import api from '../../services/api';

import {
    Octicons
} from '@expo/vector-icons';

import IconMyAccount from '../../assets/icon-my-account.svg';
import IconEmailAccount from '../../assets/icon-email-account.svg';
import IconPhoneAccount from '../../assets/icon-phone-account.svg';
import IconAddress from '../../assets/icon-address-account.svg';
import { getHeaders } from '../../utils/services';
import { useAuth } from '../../context/Auth';
import { useEffect, useState } from 'react';
import { ISignup } from '../../types';


export default function MyInfo() {
    const nav = useNavigation();
    const { authData } = useAuth();
    const [user, setUser] = useState<ISignup>();
    const [load, setLoad] = useState(true);
    const [address, setAddress] = useState({
        road: "",
        district: "",
        complement: "",
        post: "",
        city: "",
        state: ""
    });

    async function getUser() {
        try {
            const response = await api.get('/user', getHeaders(authData?.token));
            setLoad(false);
            setUser(response.data);
            setAddress({
                road: response.data.road ? response.data.road + ", ": "",
                district: response.data.district ? response.data.district + ', ' : "",
                complement: response.data.complement ? response.data.complement + ', ' : "",
                post: response.data.post ? response.data.post : "",
                city: response.data.city ? response.data.city + ' - ' : "",
                state: response.data.state ? response.data.state + ", ": ""
            });
        } catch (error) {
            return error
        }
    }

    useEffect(() => {
        getUser();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "flex-start", backgroundColor: "#09184D" }}>
            <WrapperTop>
                <ButtonGoback
                    onPress={() => nav.goBack()}
                >
                    <Octicons
                        name="arrow-left"
                        size={34}
                        color="#EDF2FA" />
                </ButtonGoback>
                <TextTop>Minhas informações</TextTop>
            </WrapperTop>
            <WrapperMain>
                <ContainerInfoOptions>
                    <IconMyAccount
                        style={styles.iconsInfo}
                    />
                    <TextContainerInfoOptions>
                        {!load && user?.name}
                    </TextContainerInfoOptions>
                </ContainerInfoOptions>
                <ContainerInfoOptions>
                    <IconEmailAccount
                        style={styles.iconsInfo}
                    />
                    <TextContainerInfoOptions>
                        {!load && user?.email}
                    </TextContainerInfoOptions>
                </ContainerInfoOptions>
                <ContainerInfoOptions>
                    <IconPhoneAccount
                        style={styles.iconsInfo}
                    />
                    <TextContainerInfoOptions>
                        {!load && user?.phone}
                    </TextContainerInfoOptions>
                </ContainerInfoOptions>
                <ContainerInfoOptions>
                    <IconAddress
                        style={styles.iconsInfo}
                    />
                    <TextContainerInfoOptions>
                        {!load && `${address?.road}${address?.district}${address?.city}${address?.state}${address?.complement}${address?.post}`}
                        {/* {!load && arrayAddress} */}
                    </TextContainerInfoOptions>
                </ContainerInfoOptions>
            </WrapperMain>
        </SafeAreaView>
    )
};