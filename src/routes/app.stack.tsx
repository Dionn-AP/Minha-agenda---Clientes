import { createNativeStackNavigator } from "@react-navigation/native-stack";

import GetStarted from "../views/GetStarted/GetStarted";
import Login from "../views/Login/Login";
import Signup from "../views/Signup/Signup";

const { Navigator, Screen } = createNativeStackNavigator();

export default function AppStack() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            {/* <Screen name="Login" component={Login} /> */}
            <Screen name="Signup" component={Signup} />
            {/* <Screen name="Bem-Vindo" component={GetStarted} /> */}
        </Navigator>
    );
}