import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Stack } from "expo-router";

export default function AuthLayout() {
  const token = useSelector((state) => state.Reducers.authToken);
  const user = useSelector((state) => state.Reducers.user);

  // If user is authenticated, redirect to main app
  if (token !== null && user.length > 0) {
    return <Redirect href="/(app)" />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
} 