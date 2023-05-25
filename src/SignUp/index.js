import React, { useState } from "react";
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
const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [isPasswordShown, setPassowrdShow] = useState(true);

  const handleLogin = () => {
    // Implement login logic here
    navigation.dispatch(
      StackActions.replace("LoginScreen", {
        user: "jane",
      })
    );
  };

  const handleSignup = () => {
    // Implement signup logic here
    navigation.dispatch(
      StackActions.replace("LoginScreen", {
        user: "jane",
      })
    );
  };

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
              onLogin();
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
