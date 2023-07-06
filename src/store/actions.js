import AsyncStorage from "@react-native-async-storage/async-storage";
import config from "../features/config";
import axios from "axios";

export const Init = () => {
  return async (dispatch) => {
    let token = await AsyncStorage.getItem("token");
    if (token !== null) {
      console.log("token fetched");
      dispatch({
        type: "LOGIN",
        payload: token,
      });
    }
  };
};

export const Login = (email, password) => {
  return async (dispatch) => {
    let token = null;
    const DB_NAME = "DbKSBA"
    try {
      const response = await axios.get(
        `http://{BASE_URL}:8069/login?db=${DB_NAME}&email=${email}&password=${password}`
      );
      console.log(response.data);
      const setCookieHeader = response.headers["set-cookie"];
      const cookie = setCookieHeader[0];
      const sessionId = cookie.split(";")[0].split("=")[1];
      await AsyncStorage.setItem("token", sessionId);
      await dispatch({
        type: "LOGIN",
        payload: sessionId,
      });
      await dispatch({
        type: "USER",
        payload: response.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const getUserDetails = (sessionId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://{BASE_URL}/get_user_details`, {
        headers: {
          "X-Session-ID": sessionId,
        },
      });
    } catch (e) {}
  };
};
export const Loading = (state) => {
  return async (dispatch) => {
    dispatch({
      type: "LOADER",
      payload: state,
    });
  };
};

export const SignUp = (email, password) => {
  return async () => {};
};

export const Logout = () => {
  return async (dispatch) => {
    await AsyncStorage.clear();
    dispatch({
      type: "LOGOUT",
    });
  };
};
