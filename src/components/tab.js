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
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RoutesScreen from "../Routes";
const Tab = createBottomTabNavigator();
import StudentsScreen from "../StudentsScreen/iindex";

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
      <Stack.Screen name="BusesScreen" component={BusesScreen} />
    </Stack.Navigator>
  );
};
function StudentNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="StudentScreen"
    >
      <Stack.Screen name="StudentsScreen" component={StudentsScreen} />
    </Stack.Navigator>
  );
}

function RoutesNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="RoutesScreen"
    >
      <Stack.Screen name="RoutesScreen" component={RoutesScreen} />
    </Stack.Navigator>
  );
}

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

          height: 90,
        },
      }}
    >
      <Tab.Screen
        name="Buses"
        component={BusesNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",

                  tintColor: focused ? "#FECF67" : "#3f81ed",
                }}
              >
                <Icon
                  name="bus"
                  size={22}
                  color={focused ? "#FECF67" : "#3f81ed"}
                />
                {focused && (
                  <Icons name="dot-single" size={20} color="#FECF67" />
                )}
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Routes"
        component={RoutesNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",

                  tintColor: focused ? "#FECF67" : "#3f81ed",
                }}
              >
                <Icon
                  name="road"
                  size={22}
                  color={focused ? "#FECF67" : "#3f81ed"}
                />
                {focused && (
                  <Icons name="dot-single" size={20} color="#FECF67" />
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Students"
        component={StudentNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",

                  tintColor: focused ? "#FECF67" : "#3f81ed",
                }}
              >
                <Icony
                  name="user-graduate"
                  size={22}
                  color={focused ? "#FECF67" : "#3f81ed"}
                />
                {focused && (
                  <Icons name="dot-single" size={20} color="#FECF67" />
                )}
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
