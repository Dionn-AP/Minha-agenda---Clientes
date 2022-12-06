import {
    WhrapperMain,
    TextButtonStarted,
    ImageSplashOne,
    ButtonTabView,
    FooterTabView,
    ButtonStarted
} from './GetStarted_Styled';

import { SafeAreaView } from 'react-native-safe-area-context';

import { useState } from 'react';
import { TabView, SceneMap } from 'react-native-tab-view';

import GetStartedView from '../../components/GetStartedView';

const FirstRoute = () => (

    <GetStartedView
        image={require("../../assets/splash-01.png")}
        text="Seja bem vindo! Aqui você poderá encontrar serviços dos mais variados para atender as suas necessidades"
        page={1}
    />

);

const SecondRoute = () => (
    <GetStartedView
        image={require("../../assets/splash-02.png")}
        text="Busque por um tipo de serviço e agende o seu horário de atendimento"
        page={2}
    />
);

const ThirdRoute = () => (
    <GetStartedView
        image={require("../../assets/splash-03.png")}
        text="Aproveite!"
        page={3}
    />
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