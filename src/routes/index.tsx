import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./app.stack";

export default function RootRoutes() {
  
    return (
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    );
  }