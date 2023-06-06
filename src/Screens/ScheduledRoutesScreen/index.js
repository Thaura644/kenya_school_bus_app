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
