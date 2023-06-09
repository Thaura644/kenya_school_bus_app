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
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import PageHeader from "../../components/PageHeader";
import BusRouteDetails from "../../components/BusRouteDetails";
export default function ScheduledRoutesScreen({ navigation }) {
  const [pin, setPin] = useState({
    latitude: 13.4564,
    longitude: 123.3753,
    longitudeDelta: 0.005,
    latitudeDelta: 0.0005,
  });
  const [show, setShow] = useState(true);
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
          <PageHeader />
          <Text style={{ fontSize: 19, width: "60%", fontWeight: "bold" }}>
            XYZ's school bus route
          </Text>
        </View>

        <MapView mapType="mutedStandard" style={{ flex: 1 }}></MapView>
        <BusRouteDetails
          show={show}
          onDismiss={() => {
            setShow(false);
          }}
          enableBackDropDismiss
        />
        <TouchableOpacity
          onPress={() => {
            setShow(true);
          }}
          style={{
            elevation: 10,
            position: "absolute",
            bottom: 120,
            right: 15,
            backgroundColor: "white",
            borderRadius: 50,
            width: 30,
            justifyContent: "center",
            alignItems: "center",
            height: 30,
          }}
        >
          <MaterialCommunityIcons name="routes" color="#FECF67" size={20} />
        </TouchableOpacity>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  searchBox: {
    position: "absolute",
    marginTop: 20,
    flexDirection: "row",

    width: "100%",
    zIndex: 2000,
    alignItems: "center",
    alignSelf: "flex-start",
    borderRadius: 5,
  },
});
