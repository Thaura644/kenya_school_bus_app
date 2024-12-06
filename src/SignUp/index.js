import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { StackActions } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import { SignUp } from "../store/actions"; // Import the SignUp action

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordShown, setPasswordShow] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const validateFields = () => {
    if (!fullname.trim()) return "Full name is required.";
    if (!email.match(/\S+@\S+\.\S+/)) return "Invalid email address.";
    if (password.length < 6) return "Password must be at least 6 characters.";
    return null;
  };

  const handleSignup = async () => {
    const validationError = validateFields();
    if (validationError) {
      setError(validationError);
      return;
    }
    try {
      await dispatch(SignUp(email, fullname, password));
      navigation.dispatch(StackActions.replace("StudentsScreen", { fullname }));
    } catch (err) {
      setError("Signup failed. Please try again.");
      console.error("Error signing up:", err);
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.logoContainer}>
        <Image source={require("../../assets/logo1.png")} resizeMode="contain" style={styles.logo} />
      </View>

      <View style={styles.formContainer}>
        {error && <Text style={styles.errorText}>{error}</Text>}

        <Text style={styles.label}>Full Name</Text>
        <TextInput
          placeholder="Enter your full name"
          style={styles.textInput}
          value={fullname}
          onChangeText={setFullname}
        />

        <Text style={styles.label}>Email Address</Text>
        <TextInput
          placeholder="Enter your email"
          style={styles.textInput}
          value={email}
          keyboardType="email-address"
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Enter your password"
          style={styles.textInput}
          value={password}
          secureTextEntry={isPasswordShown}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          onPress={() => setPasswordShow(!isPasswordShown)}
          style={styles.eyeIcon}
        >
          <Image
            source={
              isPasswordShown
                ? require("../../assets/hide.png")
                : require("../../assets/eye.png")
            }
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSignup} style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.loginRedirect}>
          <Text style={styles.loginText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  logoContainer: { alignItems: "center", marginTop: 50 },
  logo: { width: 350, height: 300 },
  formContainer: { marginHorizontal: 20, marginTop: 20 },
  label: { fontSize: 16, marginVertical: 5 },
  textInput: { borderWidth: 1, borderColor: "gray", borderRadius: 10, padding: 10, marginBottom: 15 },
  eyeIcon: { position: "absolute", right: 30, top: -45 },
  icon: { width: 25, height: 25 },
  button: { backgroundColor: "#FECF67", borderRadius: 10, padding: 15, alignItems: "center" },
  buttonText: { fontSize: 18, fontWeight: "bold" },
  errorText: { color: "red", marginBottom: 15 },
  loginRedirect: { flexDirection: "row", justifyContent: "center", marginTop: 20 },
  loginText: { fontSize: 16 },
  link: { fontSize: 16, color: "#FECF67", fontWeight: "bold", marginLeft: 5 },
});

export default SignupScreen;
