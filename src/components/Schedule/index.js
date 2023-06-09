import React, { useState, useEffect } from "react";

import {
  Image,
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TextInput,
  Touchable,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Skeleton } from "moti/skeleton";
export default function Schedule({ navigation }) {
  const [location, setLocation] = useState("Town East, West Rd, Nakuru");
  var matches = location.match(/\b(\w)/g);
  var first = matches.join("");
  /** <Image
            source={require("../../../assets/route.png")}
            style={{ width: 20, height: 20 }}
          /> */
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ScheduledRoutesScreen");
      }}
      style={styles.container}
    >
      <View style={styles.box}>
        <Skeleton width={65} colorMode="light" height={15} />
        <Skeleton width={45} colorMode="light" height={25} />
        <Skeleton width={45} colorMode="light" height={15} />
      </View>

      <View style={styles.box2}>
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: "grey",
            marginHorizontal: 10,
          }}
        />
        <View
          style={{ backgroundColor: "#e0e5ee", padding: 10, borderRadius: 50 }}
        >
          <Skeleton width={45} radius="round" colorMode="light" height={45} />
        </View>
        <View
          style={{
            flex: 1,

            height: 1,

            backgroundColor: "grey",
            marginHorizontal: 10,
          }}
        />
      </View>
      <View style={styles.box}>
        <Skeleton width={65} colorMode="light" height={15} />
        <Skeleton width={45} colorMode="light" height={25} />

        <Skeleton width={45} colorMode="light" height={15} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    width: "90%",
    alignSelf: "center",
    borderRadius: 15,
    padding: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    height: 100,
    marginBottom: 10,
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 1,
  },
  box: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  box2: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    width: "37%",
  },
  shortLoc: {
    fontWeight: "bold",
    color: "#FECF67",
    fontSize: 20,
  },
  location: {
    fontWeight: "bold",
    color: "#8c8c8c",
    fontSize: 10,
  },
});
