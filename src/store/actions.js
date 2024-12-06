import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const BASE_URL = "http://94.72.116.185:8000";

// Helper for setting token in AsyncStorage
const saveToken = async (token) => {
  await AsyncStorage.setItem("token", token);
};

// Helper for getting token from AsyncStorage
const getToken = async () => {
  return await AsyncStorage.getItem("token");
};

// Action to initialize the app
export const Init = () => {
  return async (dispatch) => {
    try {
      const token = await getToken();

      if (token) {
        dispatch({ type: "LOGIN", payload: token });
        await dispatch(getUserDetails(token)); // Fetch user details
      } else {
        await dispatch(getSchools()); // Load schools if not logged in
      }
    } catch (error) {
      console.error("Error initializing app:", error.message);
    }
  };
};

// Login action
export const Login = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch(Loading(true)); // Set loader to true
      const response = await axios.post(`${BASE_URL}/auth/login`, {
        login: email,
        password,
      });

      const token = response.data.access_token;
      await saveToken(token);

      dispatch({ type: "LOGIN", payload: token });
      await dispatch(getUserDetails(token)); // Fetch user details
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
    } finally {
      dispatch(Loading(false)); // Set loader to false
    }
  };
};

// Signup action
export const SignUp = (email, fullname, password) => {
  return async (dispatch) => {
    try {
      dispatch(Loading(true)); // Set loader to true
      const response = await axios.post(`${BASE_URL}/auth/signup`, {
        login: email,
        fullname: fullname,
        password: password,
      });

      const token = response.data.access_token;
      await saveToken(token);

      dispatch({ type: "LOGIN", payload: token });
      await dispatch(getUserDetails(token)); // Fetch user details
    } catch (error) {
      console.error("Signup failed:", error.response?.data || error.message);
    } finally {
      dispatch(Loading(false)); // Set loader to false
    }
  };
};

// Logout action
export const Logout = () => {
  return async (dispatch) => {
    try {
      await AsyncStorage.clear();
      dispatch({ type: "LOGOUT" });
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };
};

// Fetch user details
export const getUserDetails = (token) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${BASE_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch({ type: "USER", payload: response.data });
    } catch (error) {
      console.error("Fetching user details failed:", error.message);
    }
  };
};

// Fetch schools
export const getSchools = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${BASE_URL}/schools/get_school`);
      const schools = response.data.response;

      await AsyncStorage.setItem("schools", JSON.stringify(schools));
      dispatch({ type: "SCHOOLS", payload: schools });
    } catch (error) {
      console.error("Fetching schools failed:", error.message);
    }
  };
};

// Toggle loader state
export const Loading = (state) => {
  return (dispatch) => {
    dispatch({ type: "LOADER", payload: state });
  };
};
