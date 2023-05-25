import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
export default function DashboardCard({ selected, navigation, data }) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => navigation.navigate(selected, data)}
    >
      <View
        style={{
          backgroundColor: "gray",
          borderRadius: 50,
          marginBottom: 40,
          height: 120,
          width: "100%",

          flexDirection: "row",
          elevation: 0.3,
          marginRight: 20,
          borderRadius: 15,
        }}
      >
        <View style={style.imageCont}>
          <Image
            source={data.image}
            resizeMode="cover"
            style={style.CardImage}
          ></Image>
        </View>
        <View style={{ flexDirection: "column", padding: 10, width: "60%" }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>{data.name}</Text>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Text>{data.rating}</Text>
          </View>
          <Text>{data.location}</Text>
          <View style={style.divider}></View>
          <View
            style={{
              width: "100%",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                marginTop: 10,
                width: 90,
                height: 20,
                backgroundColor: "#212222",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "white" }}>${data.price}/person</Text>
            </View>
            <View
              style={{
                marginTop: 10,
                width: 40,
                height: 20,
                backgroundColor: "green",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
              }}
            >
              <Text style={{ fontWeight: "400", color: "white", fontSize: 16 }}>
                {data.type}
              </Text>
            </View>
          </View>
          <View></View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  priceTag: {
    height: 70,
    opacity: 0.9,
    width: "auto",

    position: "absolute",
    flexDirection: "row",
    zIndex: 1,

    padding: 15,
    right: 0,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  cardInner: {
    height: 100,
    padding: 25,
    margin: 10,
  },
});
