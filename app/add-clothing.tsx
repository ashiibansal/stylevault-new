import {
    ActivityIndicator,
    Image,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
  
  export default function AddClothingScreen() {
    // UI-only state
    const isUploading = false;
  
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
          {/* Image Preview */}
          <View style={styles.imageWrapper}>
            <Image
              source={require("../assets/images/placeholder.png")}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
  
          {/* Select Image Button */}
          <Pressable style={styles.outlinedButton}>
            <Text style={styles.outlinedButtonText}>Select Image</Text>
          </Pressable>
  
          {/* Category Input */}
          <TextInput
            placeholder="Category (e.g., Shirt, Pants)"
            style={styles.input}
            autoCapitalize="words"
          />
  
          {/* Spacer */}
          <View style={{ flex: 1 }} />
  
          {/* Progress */}
          {isUploading && (
            <ActivityIndicator size="small" style={{ marginBottom: 8 }} />
          )}
  
          {/* Bottom Buttons */}
          <View style={styles.bottomRow}>
            <Pressable style={styles.backButton}>
              <Text style={styles.backText}>Back</Text>
            </Pressable>
  
            <Pressable style={styles.saveButton}>
              <Text style={styles.saveText}>Save to Closet</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    );
  }
  const styles = StyleSheet.create({
    safe: {
      flex: 1,
      backgroundColor: "#fff",
    },
    container: {
      flex: 1,
      padding: 16,
    },
  
    /* Image */
    imageWrapper: {
      width: 200,
      height: 200,
      alignSelf: "center",
      backgroundColor: "#f2f2f2",
      borderRadius: 8,
      overflow: "hidden",
    },
    image: {
      width: "100%",
      height: "100%",
    },
  
    /* Select Image Button */
    outlinedButton: {
      alignSelf: "center",
      marginTop: 16,
      paddingVertical: 10,
      paddingHorizontal: 16,
      borderWidth: 1,
      borderColor: "#000",
      borderRadius: 8,
    },
    outlinedButtonText: {
      color: "#000",
      fontWeight: "500",
    },
  
    /* Input */
    input: {
      marginTop: 16,
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 8,
      paddingHorizontal: 12,
      paddingVertical: 14,
      fontSize: 16,
    },
  
    /* Bottom row */
    bottomRow: {
      flexDirection: "row",
      marginTop: 24,
    },
    backButton: {
      flex: 1,
      height: 56,
      justifyContent: "center",
      alignItems: "center",
      marginRight: 8,
    },
    backText: {
      color: "#888",
      fontSize: 16,
    },
    saveButton: {
      flex: 1,
      backgroundColor: "#000",
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
      marginLeft: 8,
    },
    saveText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "600",
    },
  });