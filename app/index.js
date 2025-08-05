import { Redirect } from "expo-router";
import { useSelector } from "react-redux";

export default function Index() {
  const token = useSelector((state) => state.Reducers.authToken);
  const user = useSelector((state) => state.Reducers.user);

  if (token === null || user.length === 0) {
    return <Redirect href="/(auth)/login" />;
  }

  return <Redirect href="/(app)" />;
} 