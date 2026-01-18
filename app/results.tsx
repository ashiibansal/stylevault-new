import {
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
  
  export default function MeasurementResultsScreen() {
    // UI-only dummy results
    const resultsText =
      "Shoulders: 45 cm\nChest: 98 cm\nWaist: 82 cm";
  
    return (
      <SafeAreaView style={styles.safe}>
        {/* Toolbar */}
        <View style={styles.toolbar}>
          <Text style={styles.toolbarTitle}>Results</Text>
        </View>
  
        {/* Content */}
        <View style={styles.container}>
          {/* Title */}
          <Text style={styles.title}>Your Measurements</Text>
  
          {/* Results Card */}
          <View style={styles.card}>
            <Text style={styles.resultsText}>{resultsText}</Text>
          </View>
  
          {/* Buttons */}
          <Pressable style={styles.primaryButton}>
            <Text style={styles.primaryText}>Get AI Fashion Tips</Text>
          </Pressable>
  
          <Pressable style={styles.outlinedButton}>
            <Text style={styles.outlinedText}>Measure Again</Text>
          </Pressable>
  
          <Pressable style={styles.textButton}>
            <Text style={styles.textButtonText}>Home</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }
  const styles = StyleSheet.create({
    safe: {
      flex: 1,
      backgroundColor: "#fff",
    },
  
    /* Toolbar */
    toolbar: {
      height: 56,
      backgroundColor: "#000",
      justifyContent: "center",
      paddingHorizontal: 16,
      elevation: 4,
    },
    toolbarTitle: {
      color: "#fff",
      fontSize: 20,
      fontWeight: "600",
    },
  
    /* Content */
    container: {
      padding: 16,
      alignItems: "center",
    },
    title: {
      fontSize: 22,
      fontWeight: "600",
      marginBottom: 24,
    },
  
    /* Card */
    card: {
      width: "100%",
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 12,
      padding: 16,
      marginBottom: 32,
      backgroundColor: "#fff",
    },
    resultsText: {
      fontSize: 18,
      lineHeight: 28, // replaces lineSpacingExtra
    },
  
    /* Buttons */
    primaryButton: {
      width: "100%",
      backgroundColor: "#4CAF50",
      paddingVertical: 14,
      borderRadius: 10,
      marginBottom: 12,
    },
    primaryText: {
      color: "#000",
      fontSize: 16,
      fontWeight: "600",
      textAlign: "center",
    },
  
    outlinedButton: {
      width: "100%",
      borderWidth: 1,
      borderColor: "#4CAF50",
      paddingVertical: 14,
      borderRadius: 10,
      marginBottom: 12,
    },
    outlinedText: {
      color: "#4CAF50",
      fontSize: 16,
      textAlign: "center",
    },
  
    textButton: {
      paddingVertical: 8,
    },
    textButtonText: {
      color: "#888",
      fontSize: 16,
    },
  });  