import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import TabNavigator from "./src/components/tab";
import AuthNavigator from "./src/components/authNavigator";
import { store } from "./src/store";
import { Init } from "./src/store/actions";
import { ActivityIndicator } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
export default function App() {
  const RootNavigator = () => {
    const token = useSelector((state) => state.Reducers.authToken);
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();
    const init = async () => {
      await dispatch(Init());
      setLoading(false);
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
        {token !== null ? <AuthNavigator /> : <TabNavigator />}
      </NavigationContainer>
    );
  };
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
