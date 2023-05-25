import React, { useState } from "react";
import LoginScreen from "./src/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignupScreen from "./src/SignUp";
import TabNavigator from "./src/components/tab";
import AuthNavigator from "./src/components/authNavigator";

export default function App() {
  const [loggedin, setLogin] = useState(true);
  return (
    <NavigationContainer>
      {loggedin === true ? <AuthNavigator /> : <TabNavigator />}
    </NavigationContainer>
  );
}
