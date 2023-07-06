import React, { useEffect, useState } from "react";
import { StackActions } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Pressable,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const dbschools = AsyncStorage.getItem("schools");
  const [selected, setSelected] = React.useState("");
  const [admission, setAdmission] = useState("");
  const [school, setSchool] = React.useState("");
  const [schools, setSchools] = React.useState([]);

  

  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");

  const [isPasswordShown, setPassowrdShow] = useState(true);

  const handleSignup = () => {const [school, setSchool] = useState('');
    // Implement signup logic here
    navigation.dispatch(
      StackActions.replace("LoginScreen", {
        user: "jane",
      })
    );
  };

  const data = [
    { key: "1", value: "Administrator" },
    { key: "2", value: "Parent" },
    { key: "3", value: "Driver" },
    { key: "4", value: "Student" },
    ,
  ];

  const fetchSchools = async () => {
    try {
      const response = await axios.get(`http://192.168.73.168:8069/getschools`);
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchSchools();
  }, []);
  return (
    <ScrollView
      style={{ backgroundColor: "white" }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ marginHorizontal: 22 }}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../assets/logo1.png")}
            resizeMode="contain"
            style={{
              width: 350,
              height: 300,
            }}
          />
        </View>
      </View>

      <View style={{ top: -80, marginHorizontal: 32 }}>
        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 16,
              color: "black",
              fontWeight: 500,
              marginVertical: 8,
            }}
          >
            Full Name
          </Text>
          <View
            style={{
              width: "100%",
              borderColor: "gray",
              height: 50,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholder="Enter your full name "
              placeholderTextColor={"black"}
              value={fullname}
              onChangeText={(e) => {
                setFullname(e);
              }}
              style={{
                width: "100%",
              }}
            ></TextInput>
          </View>
        </View>
        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 16,
              color: "black",
              fontWeight: 500,
              marginVertical: 8,
            }}
          >
            Select Account Type
          </Text>
          <SelectList
            setSelected={(val) => {
              setSelected(val);
            }}
            data={data}
            save="value"
          />
        </View>
        {selected !== "Student" && (
          <View style={{ marginBottom: 12 }}>
            <Text
              style={{
                fontSize: 16,
                color: "black",
                fontWeight: 500,
                marginVertical: 8,
              }}
            >
              Email Address
            </Text>

            <View
              style={{
                width: "100%",
                borderColor: "gray",
                height: 50,
                borderWidth: 1,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 22,
              }}
            >
              <TextInput
                placeholder="Enter your email "
                placeholderTextColor={"black"}
                value={email}
                onChangeText={(e) => {
                  setEmail(e);
                }}
                keyboardType="email-address"
                style={{
                  width: "100%",
                }}
              ></TextInput>
            </View>
          </View>
        )}
        {selected === "Student" && (
          <View style={{ marginBottom: 12 }}>
            <Text
              style={{
                fontSize: 16,
                color: "black",
                fontWeight: 500,
                marginVertical: 8,
              }}
            >
              Admission Number
            </Text>

            <View
              style={{
                width: "100%",
                borderColor: "gray",
                height: 50,
                borderWidth: 1,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 22,
              }}
            >
              <TextInput
                placeholder="Enter your admission number"
                placeholderTextColor={"black"}
                value={admission}
                onChangeText={(e) => {
                  setAdmission(e);
                }}
                keyboardType="email-address"
                style={{
                  width: "100%",
                }}
              ></TextInput>
            </View>
          </View>
        )}
        {selected !== "Student" && (
          <View style={{ marginBottom: 12 }}>
            <Text
              style={{
                fontSize: 16,
                color: "black",
                fontWeight: 500,
                marginVertical: 8,
              }}
            >
              Phone Number
            </Text>
            <View
              style={{
                width: "100%",
                borderColor: "gray",
                height: 50,
                borderWidth: 1,
                justifyContent: "space-between",
                flexDirection: "row",

                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 22,
              }}
            >
              <TextInput
                placeholder="+254"
                editable={false}
                placeholderTextColor={"black"}
                keyboardType="numeric"
                style={{
                  width: "15%",
                  borderRightWidth: 1,
                  borderRightColor: "black",
                }}
              ></TextInput>
              <TextInput
                placeholder="Enter your phone number"
                placeholderTextColor={"black"}
                keyboardType="numeric"
                style={{
                  marginLeft: 10,
                  width: "85%",
                }}
              ></TextInput>
            </View>
          </View>
        )}
        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 16,
              color: "black",
              fontWeight: 500,
              marginVertical: 8,
            }}
          >
            Select School
          </Text>

          <SelectList
            setSelected={(val) => {
              setSchool(val);
            }}
            data={schools}
            save="value"
          />


            <TextInput
              placeholder="Select your School"
              placeholderTextColor={"black"}
              value={school}
              onChangeText={(text) => {
                setSchool(text);
              }}
              style={{
                width: "100%",
              }}
            />
          </View>

        </View>
        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 16,
              color: "black",
              fontWeight: 500,
              marginVertical: 8,
            }}
          >
            Password
          </Text>
          <View
            style={{
              width: "100%",
              borderColor: "gray",
              height: 50,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor={"black"}
              value={password}
              onChangeText={(e) => {
                setPassword(e);
              }}
              secureTextEntry={isPasswordShown}
              style={{
                width: "100%",
              }}
            ></TextInput>
            <TouchableOpacity
              onPress={() => setPassowrdShow(!isPasswordShown)}
              style={{
                position: "absolute",
                right: 12,
              }}
            >
              {isPasswordShown == true ? (
                <Image
                  source={require("../../assets/hide.png")}
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
              ) : (
                <Image
                  source={require("../../assets/eye.png")}
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
              )}
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => {
              Login();
            }}
            style={{
              ...styles.button,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                ...{ color: "white" },
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 20,
          }}
        >
          <Text style={{ fontSize: 14 }}>Already have an account?</Text>
          <Pressable onPress={() => navigation.navigate("LoginScreen")}>
            <Text
              style={{
                fontSize: 16,
                color: "#FECF67",
                fontWeight: "bold",
                marginLeft: 6,
              }}
            >
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    paddingBottom: 16,
    paddingVertical: 10,
    backgroundColor: "#FECF67",

    borderRadius: 12,
    marginTop: 18,
    marginBottom: 4,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SignupScreen;
