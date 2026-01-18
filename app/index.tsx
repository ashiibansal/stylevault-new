import { StyleSheet } from "react-native";

import LoginScreen from "./login";

export default function Index() {
  return <LoginScreen />;
}

/*export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>StyleVault</Text>
      <Text style={styles.subtitle}>UI setup successful ✅</Text>
    </View>
  );
}*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
});