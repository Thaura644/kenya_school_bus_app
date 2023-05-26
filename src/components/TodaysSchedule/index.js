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
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
export default function TodaysSchedule() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          marginHorizontal: 17,
        }}
      >
        <View
          style={{
            marginVertical: 17,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#2d2d2d",
            }}
          >
            Today's Schedule
          </Text>
          <Pressable>
            <Text
              style={{
                fontSize: 13,
                marginRight: 30,
                textDecorationLine: "underline",
                color: "#2d2d2d",
              }}
            >
              Show all
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
});
