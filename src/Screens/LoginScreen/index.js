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
import { useDispatch } from "react-redux";
import { Login } from "../../store/actions";
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordShown, setPassowrdShow] = useState(true);
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(Login(email, password));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ marginHorizontal: 22 }}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../../assets/logo1.png")}
            resizeMode="contain"
            style={{
              width: 350,
              height: 300,
            }}
          />
        </View>
      </View>
      <View style={{ top: -80 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginHorizontal: 22 }}>
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
                      source={require("../../../assets/hide.png")}
                      resizeMode="contain"
                      style={{
                        width: 30,
                        height: 30,
                      }}
                    />
                  ) : (
                    <Image
                      source={require("../../../assets/eye.png")}
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
                  handleLogin();
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
                  Login
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
              <Text style={{ fontSize: 14 }}>Don't have an account?</Text>
              <Pressable onPress={() => navigation.navigate("SignupScreen")}>
                <Text
                  style={{
                    fontSize: 16,
                    color: "#FECF67",
                    fontWeight: "bold",
                    marginLeft: 6,
                  }}
                >
                  Sign up
                </Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
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

export default LoginScreen;
