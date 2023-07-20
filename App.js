import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import TabNavigator from "./src/components/tab";
import AuthNavigator from "./src/components/authNavigator";
import { store } from "./src/store";
import { Init, Loading } from "./src/store/actions";
import { ActivityIndicator } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import "react-native-reanimated";
import "react-native-gesture-handler";


export default function App() {
  const RootNavigator = () => {
    const token = useSelector((state) => state.Reducers.authToken);
    const loading = useSelector((state) => state.Reducers.loader);
    const user = useSelector((state) => state.Reducers.user);

    const dispatch = useDispatch();
    const init = async () => {
      await dispatch(Init());
      dispatch(Loading(false));
    };
    useEffect(() => {
      init();
    }, []);

    if (loading) {
      return (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size="large" color="#FECF67" />
        </View>
      );
    }
    return (
      <NavigationContainer>

         {token === null || user.length === 0 ? ( //checks to see if the user is logged in
          <AuthNavigator />
        ) : (
          <Tabnavigator />
        )}

      </NavigationContainer>
    );
  };
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
