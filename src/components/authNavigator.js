import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LandingPage from "./LandingPage";
import LoginScreen from "../Screens/LoginScreen";
import SignupScreen from "../SignUp";
const Stack = createStackNavigator();
export default function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="LoginScreen"
    >
      <Stack.Screen name="LandingPage" component={LandingPage}/>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />

      <Stack.Screen name="SignupScreen" component={SignupScreen} />
    </Stack.Navigator>
  );
}
