import React, { useState, useEffect, useRef } from "react";
import { Provider } from "react-native-paper";
import MapView, { Callout, Marker, Circle } from "react-native-maps";
import {
  Image,
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Touchable,
  TouchableOpacity,
  Platform,
} from "react-native";
export default function BusesScreen({ navigation }) {
  return (
    <Provider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "white",
          paddingBottom: 20,
          height: "100%",
          width: "100%",
        }}
      >
        <MapView mapType="mutedStandard" style={{ flex: 1 }}></MapView>
      </SafeAreaView>
    </Provider>
  );
}
