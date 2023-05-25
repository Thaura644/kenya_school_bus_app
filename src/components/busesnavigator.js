import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BusesScreen from "../BusesScreen";

const Stack = createStackNavigator();
const BusesNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="BusesScreen"
    >
      <Stack.Screen name="BusesScreen" component={<BusesScreen />} />
    </Stack.Navigator>
  );
};

export default BusesNavigator();
