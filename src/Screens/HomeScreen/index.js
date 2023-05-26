import React from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import TopCard from "../../components/TopCard";
import TodaysSchedule from "../../components/TodaysSchedule";
import Schedule from "../../components/Schedule";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.topContainer}>
        <View
          style={{
            marginHorizontal: 22,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ marginVertical: 62 }}>
            <Text
              style={{
                fontSize: 20,
                color: "#2d2d2d",
                fontWeight: "bold",
              }}
            >
              Welome Aboard,
            </Text>
            <Text
              style={{ fontWeight: "bold", fontSize: 17, color: "#2d2d2d" }}
            >
              Tom
            </Text>
          </View>
          <View>
            <Image
              source={require("../../../assets/avatar.jpg")}
              style={{
                width: 60,
                height: 60,
                borderRadius: 50,
              }}
            />
          </View>
        </View>
        <TopCard />
      </View>

      <TodaysSchedule />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Schedule />
        <Schedule />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    width: "100%",
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    height: 250,
    backgroundColor: "#FECF67",
  },
});
