import {
    ImageBackground,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
  
  export default function RegisterScreen() {
    return (
      <SafeAreaView style={styles.safe}>
        <ImageBackground
          source={require("../assets/images/sv3.png")}
          style={styles.background}
          resizeMode="cover"
        >
          <View style={styles.container}>
            {/* Title */}
            <Text style={styles.title}>Create Account</Text>
  
            {/* Form */}
            <View style={styles.form}>
              <TextInput
                placeholder="Email"
                placeholderTextColor="#999"
                keyboardType="email-address"
                style={styles.input}
              />
  
              <TextInput
                placeholder="Password"
                placeholderTextColor="#999"
                secureTextEntry
                style={[styles.input, { marginTop: 16 }]}
              />
  
              <TextInput
                placeholder="Confirm Password"
                placeholderTextColor="#999"
                secureTextEntry
                style={[styles.input, { marginTop: 16 }]}
              />
  
              <Pressable style={styles.signupButton}>
                <Text style={styles.signupText}>Sign Up</Text>
              </Pressable>
            </View>
  
            {/* Back to Login */}
            <Pressable>
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