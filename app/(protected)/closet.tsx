import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
  
  export default function ClosetScreen() {
    // UI-only dummy state
    const router = useRouter();
    const isLoading = false;
  
    return (
      <SafeAreaView style={styles.safe}>
        {/* Toolbar */}
        <View style={styles.toolbar}>
          <Text style={styles.toolbarTitle}>Virtual Closet</Text>
        </View>
  
        {/* Content */}
        <View style={styles.container}>
          {isLoading ? (
            <ActivityIndicator size="large" />
          ) : (
            <FlatList
              data={[]}
              keyExtractor={(item, index) => index.toString()}
              renderItem={() => null}
              contentContainerStyle={styles.list}
              ListEmptyComponent={
                <Text style={styles.emptyText}>
                  Your closet is empty 👕
                </Text>
              }
            />
          )}
        </View>
  
        {/* FAB – Add Clothing (Bottom Right) */}
        <Pressable
          style={[styles.fab, styles.fabRight]}
          onPress={() => router.push("/add-clothing")}
        >
          <Text style={styles.fabIcon}>＋</Text>
        </Pressable>

        <Pressable
          style={[styles.fab, styles.fabLeft]}
          onPress={() => router.push("/avatar")}
        >
          <Text style={styles.fabIcon}>🧍</Text>
        </Pressable>
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
      flex: 1,
    },
    list: {
      padding: 8,
      flexGrow: 1,
      justifyContent: "center",
    },
    emptyText: {
      textAlign: "center",
      color: "#777",
      fontSize: 16,
    },
  
    /* FAB */
    fab: {
      position: "absolute",
      bottom: 16,
      width: 56,
      height: 56,
      borderRadius: 28,
      justifyContent: "center",
      alignItems: "center",
      elevation: 6,
    },
    fabRight: {
      right: 16,
      backgroundColor: "#444",
    },
    fabLeft: {
      left: 16,
      backgroundColor: "#000",
    },
    fabIcon: {
      color: "#fff",
      fontSize: 26,
      fontWeight: "600",
    },
  });