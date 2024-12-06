import React from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import Icons from "react-native-vector-icons/Entypo";
import Icony from "react-native-vector-icons/FontAwesome5";
import Icono from "react-native-vector-icons/AntDesign";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

// Import Screens
import RoutesScreen from "../Screens/RoutesScreen";
import StudentsScreen from "../Screens/StudentsScreen/";
import BusesScreen from "../Screens/BusesScreen";
import HomeScreen from "../Screens/HomeScreen";
import ScheduledRoutesScreen from "../Screens/ScheduledRoutesScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Home Stack Navigator
const HomeNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="HomeScreen"
  >
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen
      name="ScheduledRoutesScreen"
      component={ScheduledRoutesScreen}
    />
  </Stack.Navigator>
);

// Buses Stack Navigator
const BusesNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="BusesScreen"
  >
    <Stack.Screen name="BusesScreen" component={BusesScreen} />
  </Stack.Navigator>
);

// Students Stack Navigator
const StudentsNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="StudentsScreen"
  >
    <Stack.Screen name="StudentsScreen" component={StudentsScreen} />
  </Stack.Navigator>
);

// Routes Stack Navigator
const RoutesNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="RoutesScreen"
  >
    <Stack.Screen name="RoutesScreen" component={RoutesScreen} />
  </Stack.Navigator>
);

// Tab Navigator
export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: "absolute",
          ...styles.shadow,
          left: 20,
          right: 20,
          borderRadius: 10,
          bottom: 40,
          backgroundColor: "#FECF67",
          height: 60,
        },
      }}
    >
      {/* Home Tab */}
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Icono
                name="home"
                size={22}
                color={focused ? "#2d2d2d" : "#8e8e8e"}
              />
              {focused && <Icons name="dot-single" size={20} color="#2d2d2d" />}
            </View>
          ),
        }}
      />

      {/* Buses Tab */}
      <Tab.Screen
        name="Buses"
        component={BusesNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Icon
                name="bus"
                size={22}
                color={focused ? "#2d2d2d" : "#8e8e8e"}
              />
              {focused && <Icons name="dot-single" size={20} color="#2d2d2d" />}
            </View>
          ),
        }}
      />

      {/* Routes Tab */}
      <Tab.Screen
        name="Routes"
        component={RoutesNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Icon
                name="road"
                size={22}
                color={focused ? "#2d2d2d" : "#8e8e8e"}
              />
              {focused && <Icons name="dot-single" size={20} color="#2d2d2d" />}
            </View>
          ),
        }}
      />

      {/* Students Tab */}
      <Tab.Screen
        name="Students"
        component={StudentsNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Icony
                name="user-graduate"
                size={22}
                color={focused ? "#2d2d2d" : "#8e8e8e"}
              />
              {focused && <Icons name="dot-single" size={20} color="#2d2d2d" />}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Styles
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
