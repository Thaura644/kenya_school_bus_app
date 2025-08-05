import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { store } from "../src/store";
import { Init, Loading } from "../src/store/actions";
import { ActivityIndicator } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { Slot } from "expo-router";
import "react-native-reanimated";
import "react-native-gesture-handler";

export default function RootLayout() {
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
    
    return <Slot />;
  };

  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
} 