import {
    ImageBackground,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
  
  export default function HomeScreen() {
    return (
      <SafeAreaView style={styles.safe}>
        <ImageBackground
          source={require("../assets/images/sv1.png")}
          style={styles.background}
          resizeMode="cover"
        >
          {/* Toolbar */}
          <View style={styles.toolbar}>
            <Text style={styles.toolbarTitle}>StyleVault</Text>
            <Pressable>
              <Text style={styles.userIcon}>👤</Text>
            </Pressable>
          </View>
  
          {/* Welcome text */}
          <Text style={styles.welcomeText}>
            What would you like to do?
          </Text>
  
          {/* Grid */}
          <View style={styles.grid}>
            <DashboardCard emoji="✨" label="Suggest Outfit" />
            <DashboardCard emoji="💬" label="AI Stylist" />
            <DashboardCard emoji="🚪" label="Virtual Closet" />
            <DashboardCard emoji="📏" label="Measurements" />
            <DashboardCard emoji="🧍" label="Avatar" />
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
  function DashboardCard({
    emoji,
    label,
  }: {
    emoji: string;
    label: string;
  }) {
    return (
      <Pressable style={styles.card}>
        <Text style={styles.cardEmoji}>{emoji}</Text>
        <Text style={styles.cardText}>{label}</Text>
      </Pressable>
    );
  }
  const styles = StyleSheet.create({
    safe: {
      flex: 1,
    },
    background: {
      flex: 1,
    },
  
    /* Toolbar */
    toolbar: {
      height: 56,
      paddingHorizontal: 16,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    toolbarTitle: {
      color: "#fff",
      fontSize: 20,
      fontWeight: "600",
    },
    userIcon: {
      fontSize: 28,
    },
  
    /* Welcome */
    welcomeText: {
      color: "#fff",
      fontSize: 20,
      textAlign: "center",
      marginTop: 32,
      marginBottom: 24,
    },
  
    /* Grid */
    grid: {
      flexDirection: "row",
      flexWrap: "wrap",
      paddingHorizontal: 16,
      justifyContent: "center",
    },
  
    /* Card */
    card: {
      width: "45%",
      backgroundColor: "#ffffff",
      borderRadius: 16,
      margin: 8,
      paddingVertical: 24,
      alignItems: "center",
    },
    cardEmoji: {
      fontSize: 32,
    },
    cardText: {
      marginTop: 8,
      fontSize: 14,
      color: "#444",
      textAlign: "center",
    },
  });
