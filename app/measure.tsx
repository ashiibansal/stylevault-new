import {
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
  
  export default function BodyMeasurementScreen() {
    return (
      <SafeAreaView style={styles.safe}>
        {/* Toolbar */}
        <View style={styles.toolbar}>
          <Text style={styles.toolbarTitle}>Body Measurement</Text>
        </View>
  
        {/* Camera Preview Placeholder */}
        <View style={styles.previewContainer}>
          {/* Overlay (measurement guides placeholder) */}
          <View style={styles.overlay} />
  
          {/* Instruction banner */}
          <View style={styles.instructionBox}>
            <Text style={styles.instructionText}>
              Press Start and follow instructions
            </Text>
          </View>
        </View>
  
        {/* Bottom Action Card */}
        <View style={styles.bottomCard}>
          <Pressable style={styles.startButton}>
            <Text style={styles.startButtonText}>
              Start Measurement
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }
  const styles = StyleSheet.create({
    safe: {
      flex: 1,
      backgroundColor: "#000",
    },
  
    /* Toolbar */
    toolbar: {
      height: 56,
      backgroundColor: "#000",
      justifyContent: "center",
      paddingHorizontal: 16,
    },
    toolbarTitle: {
      color: "#fff",
      fontSize: 20,
      fontWeight: "600",
    },
  
    /* Preview */
    previewContainer: {
      flex: 1,
      backgroundColor: "#111", // placeholder for camera feed
    },
  
    /* Overlay */
    overlay: {
      ...StyleSheet.absoluteFillObject,
      borderWidth: 2,
      borderColor: "rgba(255,255,255,0.3)",
    },
  
    /* Instruction banner */
    instructionBox: {
      position: "absolute",
      top: 12,
      left: 12,
      right: 12,
      backgroundColor: "rgba(0,0,0,0.65)",
      padding: 12,
      borderRadius: 8,
    },
    instructionText: {
      color: "#fff",
      fontSize: 14,
      textAlign: "center",
    },
  
    /* Bottom card */
    bottomCard: {
      padding: 12,
      backgroundColor: "#1c1c1c",
    },
  
    /* Button */
    startButton: {
      backgroundColor: "#4CAF50",
      paddingVertical: 14,
      borderRadius: 10,
    },
    startButtonText: {
      color: "#000",
      fontSize: 16,
      fontWeight: "600",
      textAlign: "center",
    },
  });