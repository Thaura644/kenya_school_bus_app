import AsyncStorage from "@react-native-async-storage/async-storage";
import config from "../features/config";

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

export const Login = (email, password,session_id) => {
  return async (dispatch) => {
    let token = null;
    data = {
      database:'ui',//change this to your database name or create an env file
      email: email,
      password:password
    }
    const response = await config.post({url:'/login',data:data,method: 'POST'})
    console.log(response);
    await AsyncStorage.setItem("token", token);

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
