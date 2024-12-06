// AuthContext.js
import React, { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authTokens, setAuthTokens] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await axios.post("http://94.72.116.185:8000/auth/login", {
        login: email,
        password: password,
      });

      if (response.status === 200) {
        const { access_token, refresh_token } = response.data;

        // Save tokens and user data to AsyncStorage
        await AsyncStorage.setItem("access_token", access_token);
        await AsyncStorage.setItem("refresh_token", refresh_token);

        setAuthTokens({ access_token, refresh_token });
        setUser({ email });
      }
    } catch (error) {
      console.error("Login error:", error);
      throw error; // Handle this in the component to show an error message
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem("access_token");
    await AsyncStorage.removeItem("refresh_token");
    setAuthTokens(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, authTokens, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
