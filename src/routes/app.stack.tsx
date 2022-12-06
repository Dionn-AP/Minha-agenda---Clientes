import { createNativeStackNavigator } from "@react-navigation/native-stack";

import GetStarted from "../views/GetStarted/GetStarted";
import Login from "../views/Login/Login";
import Signup from "../views/Signup/Signup";
import RecoveryPassword from "../views/RecoveryPassword/RecoveryPassword";
import ConfirmRegister from "../views/ConfirmRegister/ConfirmRegister";

const { Navigator, Screen } = createNativeStackNavigator();

export default function AppStack() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name="Login" component={Login} />
            <Screen name="Signup" component={Signup} />
            <Screen name="Recuperar Senha" component={RecoveryPassword} />
            <Screen name="Confirmar Cadastro" component={ConfirmRegister} />
            <Screen name="Bem-Vindo" component={GetStarted} />
        </Navigator>
    );
}
