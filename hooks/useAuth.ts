import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const AUTH_KEY = "stylevault_logged_in";

export function useAuth() {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);

  // 🔄 Load auth state on app start
  useEffect(() => {
    const loadAuth = async () => {
      const value = await AsyncStorage.getItem(AUTH_KEY);
      setAuthenticated(value === "true");
    };

    loadAuth();
  }, []);

  const login = async () => {
    await AsyncStorage.setItem(AUTH_KEY, "true");
    setAuthenticated(true);
  };

  const logout = async () => {
    await AsyncStorage.removeItem(AUTH_KEY);
    setAuthenticated(false);
  };

  return {
    authenticated,
    login,
    logout,
  };
}