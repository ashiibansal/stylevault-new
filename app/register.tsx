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

export default function RegisterScreen() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert("Error", "All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    router.replace("/home");
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ImageBackground
        source={require("../assets/images/sv3.png")}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <Text style={styles.title}>Create Account</Text>

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

            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor="#999"
              secureTextEntry
              style={[styles.input, { marginTop: 16 }]}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />

            <Pressable style={styles.signupButton} onPress={handleRegister}>
              <Text style={styles.signupText}>Sign Up</Text>
            </Pressable>
          </View>

          <Pressable onPress={() => router.back()}>
            <Text style={styles.backText}>Back to Login</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
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
      fontSize: 30,
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
    signupButton: {
      backgroundColor: "#000",
      paddingVertical: 14,
      borderRadius: 8,
      marginTop: 30,
    },
    signupText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "600",
      textAlign: "center",
    },
    backText: {
      color: "#fff",
      marginTop: 24,
      fontWeight: "600",
    },
  });  