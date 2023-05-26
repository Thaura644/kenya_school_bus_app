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
export default function TopCard() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          marginHorizontal: 17,
        }}
      >
        <View style={{ marginVertical: 17 }}>
          <Text
            style={{
              fontSize: 13,
              color: "#2d2d2d",
            }}
          >
            Search Bus Schedule
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    marginTop: 150,
    flexDirection: "row",
    backgroundColor: "#fff",
    width: "90%",
    alignSelf: "center",
    borderRadius: 15,
    padding: 10,
    height: 200,
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
});
