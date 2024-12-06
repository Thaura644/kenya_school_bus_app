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
import { Login } from "../../store/actions";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordShown, setPasswordShow] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const validateFields = () => {
    if (!email.match(/\S+@\S+\.\S+/)) return "Invalid email address.";
    if (!password) return "Password is required.";
    return null;
  };

  const handleLogin = async () => {
    const validationError = validateFields();
    if (validationError) {
      setError(validationError);
      return;
    }
    try {
      await dispatch(Login(email, password));
      navigation.dispatch(StackActions.replace("StudentsScreen"));
    } catch (err) {
      setError("Login failed. Please check your credentials.");
      console.error("Login error:", err);
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.logoContainer}>
        <Image source={require("../../../assets/logo1.png")} resizeMode="contain" style={styles.logo} />
      </View>

      <View style={styles.formContainer}>
        {error && <Text style={styles.errorText}>{error}</Text>}

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
                ? require("../../../assets/hide.png")
                : require("../../../assets/eye.png")
            }
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.signupRedirect}>
          <Text style={styles.signupText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignupScreen")}>
            <Text style={styles.link}>Sign Up</Text>
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
  signupRedirect: { flexDirection: "row", justifyContent: "center", marginTop: 20 },
  signupText: { fontSize: 16 },
  link: { fontSize: 16, color: "#FECF67", fontWeight: "bold", marginLeft: 5 },
});

export default LoginScreen;
