import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { StackActions } from "@react-navigation/native";
import { SelectList } from "react-native-dropdown-select-list";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Pressable,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import { SignUp } from "../store/actions"; // Import the SignUp action

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [selected, setSelected] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordShown, setPasswordShow] = useState(true);
  const dispatch = useDispatch();

  const handleSignup = async () => {
    try {
      await dispatch(SignUp(email, fullname, password));

      // Navigate to School Selection Screen after successful signup
      navigation.dispatch(
        StackActions.replace("StudentsScreen", {
          fullname: fullname,
        })
      );
    } catch (error) {
      console.error("Error creating user:", error);
      alert("Failed to create user. Please try again later.");
    }
  };

  const data = [
    { key: "1", value: "Administrator" },
    { key: "2", value: "Parent" },
    { key: "3", value: "Driver" },
    { key: "4", value: "Student" },
  ];

  return (
    <ScrollView style={{ backgroundColor: "white" }} showsVerticalScrollIndicator={false}>
      <View style={{ marginHorizontal: 22 }}>
        <View style={{ alignItems: "center" }}>
          <Image source={require("../../assets/logo1.png")} resizeMode="contain" style={{ width: 350, height: 300 }} />
        </View>
      </View>

      <View style={{ top: -80, marginHorizontal: 32 }}>
        <View style={{ marginBottom: 12 }}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            placeholder="Enter your full name"
            placeholderTextColor={"black"}
            value={fullname}
            onChangeText={setFullname}
            style={styles.textInput}
          />
        </View>

        {/* <View style={{ marginBottom: 12 }}>
          <Text style={styles.label}>Select Account Type</Text>
          <SelectList
            setSelected={setSelected}
            data={data}
            save="value"
          />
        </View> */}

        <View style={{ marginBottom: 12 }}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor={"black"}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            style={styles.textInput}
          />
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            placeholder="Enter your password"
            placeholderTextColor={"black"}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={isPasswordShown}
            style={styles.textInput}
          />
          <TouchableOpacity onPress={() => setPasswordShow(!isPasswordShown)} style={{ position: "absolute", right: 12 }}>
            <Image
              source={
                isPasswordShown
                  ? require("../../assets/hide.png")
                  : require("../../assets/eye.png")
              }
              resizeMode="contain"
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleSignup} style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.loginContainer}>
            <Text style={styles.loginPrompt}>Already have an account?</Text>
            <Pressable onPress={() => navigation.navigate("LoginScreen")}>
              <Text style={styles.loginText}>Login</Text>
            </Pressable>
          </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: "black",
    fontWeight: "500",
    marginVertical: 8,
  },
  textInput: {
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    height: 50,
    paddingLeft: 22,
  },
  button: {
    paddingBottom: 16,
    paddingVertical: 10,
    backgroundColor: "#FECF67",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 20,
    fontWeight: "700",
  },
  loginContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  loginPrompt: {
    fontSize: 14,
  },
  loginText: {
    fontSize: 16,
    color: "#FECF67",
    fontWeight: "bold",
    marginLeft: 6,
  },
});

export default SignupScreen;
