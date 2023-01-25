import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ConfirmRegister from "../views/ConfirmRegister/ConfirmRegister";
import Login from "../views/Login/Login";
import RecoveryPassword from "../views/RecoveryPassword/RecoveryPassword";
import Signup from "../views/Signup/Signup";

const { Navigator, Screen } = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name="Login" component={Login} />
            <Screen name="Signup" component={Signup} />
            <Screen name="confirmar_adastro" component={ConfirmRegister} />
            <Screen name="Recuperar Senha" component={RecoveryPassword} />
        </Navigator>
    );
}
