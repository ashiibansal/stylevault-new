import {
    FlatList,
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
  
  export default function AvatarTryOnScreen() {
    // UI-only dummy data
    const clothingItems = [
      { id: "1", label: "Shirt" },
      { id: "2", label: "Jacket" },
      { id: "3", label: "Hoodie" },
      { id: "4", label: "Kurta" },
    ];
  
    // UI-only state
    const showOverlay = false;
  
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
          {/* Avatar Container */}
          <View style={styles.avatarContainer}>
            {/* Base Avatar */}
            <Image
              source={require("../assets/images/avatar_base.png")}
              style={styles.avatar}
              resizeMode="contain"
            />
  
            {/* Clothing Overlay */}
            {showOverlay && (
              <Image
                source={require("../assets/images/clothing_overlay.png")}
                style={styles.avatar}
                resizeMode="contain"
              />
            )}
          </View>
  
          {/* Instruction */}
          <Text style={styles.instruction}>
            Tap an item to try it on
          </Text>
  
          {/* Closet Recycler */}
          <FlatList
            data={clothingItems}
            horizontal
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.closetList}
            renderItem={({ item }) => (
              <Pressable style={styles.clothingCard}>
                <Text>{item.label}</Text>
              </Pressable>
            )}
          />
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
  
    /* Avatar area */
    avatarContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    },
    avatar: {
      width: "100%",
      height: "100%",
      position: "absolute",
    },
  
    /* Instruction text */
    instruction: {
      fontSize: 16,
      fontWeight: "600",
      marginTop: 8,
      marginBottom: 4,
    },
  
    /* Closet list */
    closetList: {
      paddingVertical: 8,
    },
    clothingCard: {
      width: 100,
      height: 100,
      marginRight: 12,
      borderRadius: 8,
      backgroundColor: "#f2f2f2",
      justifyContent: "center",
      alignItems: "center",
    },
  });