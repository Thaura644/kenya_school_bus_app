import React, { useState, useEffect, useRef } from "react";
import { Provider } from "react-native-paper";
import MapView, { Callout, Marker, Circle } from "react-native-maps";
import {
  Image,
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TextInput,
  Touchable,
  TouchableOpacity,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
export default function BusesScreen({ navigation }) {
  const [pin, setPin] = useState({
    latitude: 13.4564,
    longitude: 123.3753,
    longitudeDelta: 0.005,
    latitudeDelta: 0.0005,
  });
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
        <View style={styles.searchBox}>
          <TextInput
            placeholder="Where to?"
            placeholderTextColor="gray"
            autoCapitalize="none"
            style={{ flex: 1, padding: 0 }}
          />
          <Icon name="location-arrow" size={22} color="black" />
        </View>
        <MapView mapType="mutedStandard" style={{ flex: 1 }}></MapView>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  searchBox: {
    position: "absolute",
    marginTop: Platform.OS == "ios" ? 20 : 20,
    flexDirection: "row",
    backgroundColor: "#fff",
    width: "90%",
    zIndex: 2000,
    alignSelf: "center",
    borderRadius: 5,
    padding: 10,

    shadowColor: "gray",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
});
