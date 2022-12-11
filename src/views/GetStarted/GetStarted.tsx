import {
    WhrapperMain,
    ButtonTabView,
    FooterTabView,
    TextButtonStarted,
    ButtonStarted,
    ContainerButton
} from './GetStarted_Styled';

import { SafeAreaView } from 'react-native-safe-area-context';

import { useState } from 'react';
import { TabView, SceneMap } from 'react-native-tab-view';

import GetStartedView from '../../components/GetStartedView';

const FirstRoute = () => (
    <WhrapperMain>
        <GetStartedView
            image={require("../../assets/splash-01.png")}
            text="Seja bem vindo! Aqui você poderá encontrar serviços dos mais variados para atender as suas necessidades"
        />
    </WhrapperMain>
);

const SecondRoute = () => (
    <WhrapperMain>
        <GetStartedView
            image={require("../../assets/splash-02.png")}
            text="Busque por um tipo de serviço e agende o seu horário de atendimento"
        />
    </WhrapperMain>
);

const ThirdRoute = () => (
    
    <WhrapperMain>
        <GetStartedView
            image={require("../../assets/splash-03.png")}
            text="Aproveite!"
        />
        {/* <ContainerButton>
            <ButtonStarted
                onPress={() => nav.navigate("Login")}
            >
                <TextButtonStarted>COMEÇAR</TextButtonStarted>
            </ButtonStarted>
        </ContainerButton> */}
    </WhrapperMain>
);

export default function GetStarted() {

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: "first" },
        { key: "second" },
        { key: "third" }
    ]);

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute
    });

    const renderIndicators = (props: any) => (
        <FooterTabView>
            {props.navigationState.routes.map((route: any, i: number) => (
                <ButtonTabView
                    key={i + route.key + "route"}
                    style={{ backgroundColor: index === i ? "#7B5BF2" : "#EDF2FA" }}
                />
            ))}
        </FooterTabView>
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            
            <TabView
                renderTabBar={renderIndicators}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                tabBarPosition="bottom"
            />
        </SafeAreaView>
    )
};