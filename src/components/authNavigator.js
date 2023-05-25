import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../LoginScreen";
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
      <Stack.Screen name="LoginScreen" component={LoginScreen} />

      <Stack.Screen name="SignupScreen" component={SignupScreen} />
    </Stack.Navigator>
  );
}
