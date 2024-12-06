import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import config from "../features/config";

// Base URL of the API
const BASE_URL = "http://94.72.116.185:8000";
// const token = response.data.access_token;

// Initialize App and check for existing token
export const Init = () => {
  return async (dispatch) => {
    try {
      let token = await AsyncStorage.getItem("token");

      if (token) {
        dispatch({
          type: "LOGIN",
          payload: token,
        });
        await getUserDetails(token)(dispatch); // Get user details if token exists
      } else {
        await getSchools()(dispatch); // Load schools if no token is available
      }
    } catch (error) {
      console.error("Error during initialization:", error);
    }
  };
};

// Login Action
export const Login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, {
        login: email,
        password: password,
      });

      const token = response.data.access_token; // Assume token is returned in the response
      await AsyncStorage.setItem("token", token);

      dispatch({
        type: "LOGIN",
        payload: token,
      });
      console.log("User Details Response:", response.data);

      await getUserDetails(token)(dispatch);
      
    } catch (error) {
      console.error("Login failed:", error);
      // Add error handling or display logic here if needed
    }
  };
};

// Fetch list of schools
export const getSchools = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${BASE_URL}/schools/get_school`);
      await AsyncStorage.setItem("schools", JSON.stringify(response.data.response));
      console.log("Fetched schools:", response.data.response);
    } catch (error) {
      console.error("Error fetching schools:", error);
    }
  };
};

// Fetch user details based on the session token
export const getUserDetails = (refresh_token) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${BASE_URL}/auth/me`, {
        headers: {
          Authorization: `Bearer ${refresh_token}`,
        },
      });
      dispatch({
        type: "USER",
        payload: response.data,
      });
      console.log("User Details Response:", response.data);

    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };
};

// Toggle loading state
export const Loading = (state) => {
  return (dispatch) => {
    dispatch({
      type: "LOADER",
      payload: state,
    });
  };
};

// Verify token (this function can be modified depending on the actual token verification process)
const verifyToken = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/auth/validate_token`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Assume the API returns { isValid: true } when the token is valid
    // return response.data.isValid || response.status === 200;
    return response.status === 200; // Return true if token is valid or 200 status code is received
  } catch (error) {
    console.error("Error verifying token:", error);
    return false; // Return false if token verification fails
  }
};


// Signup Action (To be implemented)
// Signup Action
export const SignUp = (email, fullname, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/signup`, {
        login: email,
        fullname: fullname,
        password: password,
        // Add any other required fields like company_id or partner_id if needed
      });

      // Assuming token is returned upon signup
      const token = response.data.access_token;
      await AsyncStorage.setItem("token", token);

      dispatch({
        type: "LOGIN",
        payload: token,
      });

      // Optionally verify the token after successful signup
      const isValid = await verifyToken(token); // Check token validity
      if (isValid) {
        await getUserDetails(token)(dispatch); // Get user details if token is valid
      } else {
        console.log("Signup succeeded, but the token is invalid.");
        await dispatch(Logout());
      }
    console.log("User Details Response:", response.data);


    } catch (error) {
      console.error("Signup failed:", error);

      // Handle specific error responses from the server
      if (error.response) {
        // Server-side errors (e.g., validation issues)
        console.error("Error details:", error.response.data);
      } else {
        // Network or other errors
        console.error("Network error:", error.message);
        
      }
    }

    
    


  };
};


// Logout Action
export const Logout = () => {
  return async (dispatch) => {
    try {
      await AsyncStorage.clear();
      dispatch({
        type: "LOGOUT",
      });
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
};
