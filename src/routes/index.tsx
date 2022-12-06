import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./app.stack";

export function RootRoutes() {
  
    return (
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    );
  }