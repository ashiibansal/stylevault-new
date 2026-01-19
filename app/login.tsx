import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const { login } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter email and password");
      return;
    }
  
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      Alert.alert("Error", "Please enter a valid email address");
      return;
    }
  
    await login(); // ✅ persisted login
    router.replace("/home");
  };
  return (
    <SafeAreaView style={styles.safe}>
      <ImageBackground
        source={require("../assets/images/sv2.png")}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <Text style={styles.title}>StyleVault</Text>

          <View style={styles.form}>
            <TextInput
              placeholder="Email"
              placeholderTextColor="#999"
              keyboardType="email-address"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />

            <TextInput
              placeholder="Password"
              placeholderTextColor="#999"
              secureTextEntry
              style={[styles.input, { marginTop: 16 }]}
              value={password}
              onChangeText={setPassword}
            />

            <Pressable
              style={styles.loginButton}
              onPress={handleLogin}
            >
              <Text style={styles.loginText}>Login</Text>
            </Pressable>
          </View>

          <Text style={styles.footerText}>
            Don&apos;t have an account?
          </Text>

          <Pressable onPress={() => router.push("/register")}>
            <Text style={styles.signupText}>Sign Up Now</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

/* styles unchanged */
  
  /* 👇 PART 3 GOES HERE (VERY IMPORTANT) */
  const styles = StyleSheet.create({
    safe: {
      flex: 1,
    },
    background: {
      flex: 1,
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      fontSize: 32,
      fontWeight: "700",
      color: "#fff",
      marginBottom: 24,
    },
    form: {
      width: "100%",
      paddingHorizontal: 32,
    },
    input: {
      backgroundColor: "#fff",
      borderRadius: 8,
      paddingHorizontal: 16,
      paddingVertical: 14,
      fontSize: 16,
    },
    loginButton: {
      backgroundColor: "#000",
      paddingVertical: 14,
      borderRadius: 8,
      marginTop: 30,
    },
    loginText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "600",
      textAlign: "center",
    },
    footerText: {
      color: "#fff",
      marginTop: 24,
    },
    signupText: {
      color: "#fff",
      fontWeight: "600",
      marginTop: 4,
    },
  });