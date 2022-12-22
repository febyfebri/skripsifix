import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./src/screens/LoginPage";
import RegisterPage from "./src/screens/RegisterPage";
import LupaPassword from "./src/screens/LupaPassword";
import Tabs from "./src/screens/Tabs";
import { StatusBar } from "expo-status-bar";


const Stack = createNativeStackNavigator()




export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LoginPage" component={LoginPage} />
          <Stack.Screen name="RegisterPage" component={RegisterPage} />
          <Stack.Screen name="Tabs" component={Tabs} />
          <Stack.Screen name="LupaPassword" component={LupaPassword} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

