import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function PageHeader({ props }) {
  const nav = useNavigation();
  return (
    <View style={style.header}>
      <View
        style={{
          alignItems: "center",
          elevation: 4,
          justifyContent: "center",
          paddingHorizontal: 10,
          backgroundColor: "#fff",
          borderRadius: 150,
          height: 30,
          width: 30,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            nav.goBack();
          }}
        >
          <Image
            source={require("../../../assets/back.png")}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              tintColor: "black",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  header: {
    marginTop: 7,
    marginBottom: 10,

    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    justifyContent: "space-between",
  },
});
