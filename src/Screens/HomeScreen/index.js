import React from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import TopCard from "../../components/TopCard";
import TodaysSchedule from "../../components/TodaysSchedule";
import Schedule from "../../components/Schedule";
import { Skeleton } from "moti/skeleton";
export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
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
            <Skeleton width={45} radius="round" colorMode="light" height={45} />
          </View>
        </View>
        <TopCard />
      </View>

      <TodaysSchedule />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Schedule navigation={navigation} />
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
