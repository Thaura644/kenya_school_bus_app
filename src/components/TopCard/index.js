import React, { useState, useEffect } from "react";

import {
  Image,
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import moment from "moment";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useSelector } from "react-redux";
export default function TopCard() {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Select date");
  const user = useSelector((state) => state.Reducers.user);
  const onChange = (event, selectedDate) => {
    setShow(false);
    const currentDate = selectedDate || date;
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDay() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    setText(fDate);
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  return (
    <SafeAreaView style={style.container}>
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
            Search School Bus Records
          </Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={style.searchBox}>
            <MaterialIcons
              name="calendar-today"
              size={30}
              color="black"
              style={{ marginRight: 10 }}
            />
            <TouchableOpacity
              onPress={() => {
                showMode("date");
              }}
              style={style.button}
            >
              <Text>{text}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={style.signIn}>
            <Text style={style.textSign}>Find Student Records</Text>
            <MaterialIcons name="navigate-next" color="#fff" size={20} />
          </TouchableOpacity>
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            is24Hour
            display="default"
            onChange={onChange}
            mode={mode}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    position: "absolute",
    marginTop: 150,
    flexDirection: "row",
    backgroundColor: "white",
    width: "90%",
    alignSelf: "center",
    flex: 1,
    borderRadius: 15,
    padding: 10,
    height: 200,
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  searchBox: {
    flexDirection: "row",
    backgroundColor: "#fff",
    width: "100%",
    alignSelf: "center",
    borderRadius: 5,
    padding: 10,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 114,
  },
  button: {
    width: "90%",
    justifyContent: "center",
    alignContent: "center",
  },
  floatingBtn: {
    height: "auto",

    width: "auto",

    backgroundColor: "white",
    position: "absolute",
    flexDirection: "row",

    padding: 15,
    right: 50,
    top: 80,
    justifyContent: "center",
    borderRadius: 50,
    elevation: 1,
    alignItems: "center",
  },
  signIn: {
    width: "90%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#212222",
    borderRadius: 10,
    marginTop: 20,
    flexDirection: "row",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
});
