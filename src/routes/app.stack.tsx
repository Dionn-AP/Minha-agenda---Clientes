import { createNativeStackNavigator } from "@react-navigation/native-stack";

import GetStarted from "../views/GetStarted/GetStarted";
import Home from "../views/Home/Home";
import MyAccount from "../views/MyAccount/MyAccount";
import AboutApp from "../views/AboutApp/AboutApp";
import MyInfo from "../views/MyInfo/MyInfo";
import EditAccount from "../views/EditAccount/EditAccount";
import Favorites from "../views/Favorites/Favorites";
import Scheduling from "../views/Scheduling/Scheduling";
import Historic from "../views/Historic/Historic";
import Services from "../views/Services/Services";

const { Navigator, Screen } = createNativeStackNavigator();

export default function AppStack() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name="Bem-Vindo" component={GetStarted} />
            <Screen name="Home" component={Home} />
            <Screen name="Minha Conta" component={MyAccount} />
            <Screen name="Sobre" component={AboutApp} />
            <Screen name="Minhas Info" component={MyInfo} />
            <Screen name="Editar Minha Conta" component={EditAccount} />
            <Screen name="Favoritos" component={Favorites} />
            <Screen name="Meus Agendamentos" component={Scheduling} />
            <Screen name="Historico" component={Historic} />
            <Screen name="Serviços" component={Services} />
        </Navigator>
    );
}
