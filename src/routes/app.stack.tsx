import { createNativeStackNavigator } from "@react-navigation/native-stack";

import GetStarted from "../views/GetStarted/GetStarted";

const { Navigator, Screen } = createNativeStackNavigator();

export default function AppStack() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name="Bem-Vindo" component={GetStarted} />
        </Navigator>
    );
}