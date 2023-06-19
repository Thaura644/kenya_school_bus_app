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
    try{
    const response = await axios.get(`http://10.1.131.2:8069/login?db=${'ui'}&email=${email}&password=${password}`)
    console.log(response.headers["set-cookie"][0])
   // await AsyncStorage.setItem("token", token);
    }
    catch(e){
     
    }
    dispatch({
      type: "LOGIN",
      payload: token,
    });
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
