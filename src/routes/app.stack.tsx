import { createNativeStackNavigator } from "@react-navigation/native-stack";

import GetStarted from "../views/GetStarted/GetStarted";
import Login from "../views/Login/Login";
import Signup from "../views/Signup/Signup";
import RecoveryPassword from "../views/RecoveryPassword/RecoveryPassword";
import ConfirmRegister from "../views/ConfirmRegister/ConfirmRegister";
import Home from "../views/Home/Home";
import MyAccount from "../views/MyAccount/MyAccount";
import AboutApp from "../views/AboutApp/AboutApp";
import MyInfo from "../views/MyInfo/MyInfo";
import EditAccount from "../views/EditAccount/EditAccount";
import Favorites from "../views/Favorites/Favorites";

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
            <Screen name="Home" component={Home} />
            <Screen name="Minha Conta" component={MyAccount} />
            <Screen name="Sobre" component={AboutApp} />
            <Screen name="Minhas Info" component={MyInfo} />
            <Screen name="Editar Minha Conta" component={EditAccount} />
            <Screen name="Favoritos" component={Favorites} />
        </Navigator>
    );
}
