import AsyncStorage from "@react-native-async-storage/async-storage";
import config from "../features/config";
import axios from "axios";

export const Init = () => {
  return async (dispatch) => {
    let token = await AsyncStorage.getItem("token");
    getSchools();
    if (token !== null) {
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
        `http://192.168.233.168:8069/login?db=ui&email=${email}&password=${password}`
      );
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
    } catch (e) {}
  };
};

export const getSchools = () => {
  return async () => {
    try {
      const response = await axios.get(`http://192.168.73.168:8069/getschools`);
      console.log(response);
      await AsyncStorage.setItem(
        "schools",
        JSON.stringify(response.data.response)
      );
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
