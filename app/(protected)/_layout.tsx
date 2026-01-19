import { useAuth } from "@/hooks/useAuth";
import { Redirect, Stack } from "expo-router";
import { ActivityIndicator, View } from "react-native";

export default function ProtectedLayout() {
  const { authenticated } = useAuth();

  // ⏳ Still checking AsyncStorage
  if (authenticated === null) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // 🔒 Not logged in
  if (!authenticated) {
    return <Redirect href="/login" />;
  }

  // ✅ Logged in
  return <Stack screenOptions={{ headerShown: false }} />;
}