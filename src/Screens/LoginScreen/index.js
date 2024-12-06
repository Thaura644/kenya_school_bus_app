import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { StackActions, useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Pressable,
  TextInput,
  Keyboard,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Login } from "../../store/actions"; // Import login action from Redux actions

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isPasswordShown, setPasswordShow] = useState(true);
  const dispatch = useDispatch();

  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };

  const handleLogin = async () => {
    try {
      await dispatch(Login(email, password));
      // Navigate to StudentsScreen after successful login
      navigation.dispatch(StackActions.replace("StudentsScreen"));
    } catch (error) {
      handleError("Invalid credentials. Please try again.", "general");
    }
  };

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!email) {
      handleError("Please input email", "email");
      isValid = false;
    } else if (!email.match(/\S+@\S+\.\S+/)) {
      handleError("Please input a valid email", "email");
      isValid = false;
    }

    if (!password) {
      handleError("Please input your password", "password");
      isValid = false;
    }

    if (isValid) {
      handleLogin();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.header}>
          <Image source={require("../../../assets/logo1.png")} resizeMode="contain" style={styles.logo} />
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Email Address</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Enter your email"
                placeholderTextColor="black"
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                  handleError(null, "email");
                }}
                keyboardType="email-address"
                style={styles.textInput}
              />
            </View>
            {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Enter your password"
                placeholderTextColor="black"
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  handleError(null, "password");
                }}
                secureTextEntry={isPasswordShown}
                style={styles.textInput}
              />
              <TouchableOpacity onPress={() => setPasswordShow(!isPasswordShown)} style={styles.passwordToggle}>
                <Image
                  source={isPasswordShown ? require("../../../assets/hide.png") : require("../../../assets/eye.png")}
                  resizeMode="contain"
                  style={styles.eyeIcon}
                />
              </TouchableOpacity>
            </View>
            {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
          </View>

          <TouchableOpacity onPress={validate} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          {errors.general && <Text style={styles.errorText}>{errors.general}</Text>}

          <View style={styles.signupContainer}>
            <Text style={styles.signupPrompt}>Don't have an account?</Text>
            <Pressable onPress={() => navigation.navigate("SignupScreen")}>
              <Text style={styles.signupText}>Sign up</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContainer: {
    marginHorizontal: 22,
  },
  header: {
    alignItems: "center",
  },
  logo: {
    width: 350,
    height: 300,
  },
  formContainer: {
    marginTop: -80,
  },
  inputWrapper: {
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    color: "black",
    fontWeight: "500",
    marginVertical: 8,
  },
  inputContainer: {
    width: "100%",
    borderColor: "gray",
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 22,
  },
  textInput: {
    width: "100%",
  },
  passwordToggle: {
    position: "absolute",
    right: 12,
    top: 10,
  },
  eyeIcon: {
    width: 30,
    height: 30,
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
  buttonText: {
    color: "black",
    fontSize: 20,
    fontWeight: "700",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 7,
  },
  signupContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  signupPrompt: {
    fontSize: 14,
  },
  signupText: {
    fontSize: 16,
    color: "#FECF67",
    fontWeight: "bold",
    marginLeft: 6,
  },
});

export default LoginScreen;
