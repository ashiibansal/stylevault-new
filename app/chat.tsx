import {
    FlatList,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
  
  export default function ChatbotScreen() {
    // UI-only dummy messages
    const messages = [
      { id: "1", sender: "bot", text: "Hi! I’m your AI Stylist 🤖" },
      { id: "2", sender: "bot", text: "Ask me about outfits, colors, or trends." },
    ];
  
    return (
      <SafeAreaView style={styles.safe}>
        {/* Toolbar */}
        <View style={styles.toolbar}>
          <Text style={styles.toolbarTitle}>🤖 AI Stylist</Text>
        </View>
  
        {/* Keyboard handling */}
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          {/* Chat list */}
          <FlatList
            data={messages}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.chatList}
            renderItem={({ item }) => (
              <View
                style={[
                  styles.messageBubble,
                  item.sender === "user"
                    ? styles.userBubble
                    : styles.botBubble,
                ]}
              >
                <Text style={styles.messageText}>{item.text}</Text>
              </View>
            )}
          />
  
          {/* Input bar */}
          <View style={styles.inputBar}>
            <TextInput
              placeholder="Type your message..."
              placeholderTextColor="#999"
              style={styles.input}
              returnKeyType="send"
            />
  
            <Pressable style={styles.sendButton}>
              <Text style={styles.sendText}>Send</Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
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
    },
    toolbarTitle: {
      color: "#fff",
      fontSize: 20,
      fontWeight: "600",
    },
  
    /* Main container */
    container: {
      flex: 1,
    },
  
    /* Chat list */
    chatList: {
      padding: 8,
      flexGrow: 1,
    },
  
    /* Message bubbles */
    messageBubble: {
      maxWidth: "75%",
      padding: 12,
      borderRadius: 12,
      marginBottom: 8,
    },
    botBubble: {
      backgroundColor: "#f2f2f2",
      alignSelf: "flex-start",
    },
    userBubble: {
      backgroundColor: "#000",
      alignSelf: "flex-end",
    },
    messageText: {
      color: "#000",
    },
  
    /* Input bar */
    inputBar: {
      flexDirection: "row",
      padding: 8,
      borderTopWidth: 1,
      borderColor: "#ddd",
      alignItems: "center",
    },
    input: {
      flex: 1,
      backgroundColor: "#f2f2f2",
      borderRadius: 20,
      paddingHorizontal: 16,
      paddingVertical: 10,
      fontSize: 16,
    },
    sendButton: {
      marginLeft: 8,
      backgroundColor: "#000",
      borderRadius: 20,
      paddingHorizontal: 16,
      paddingVertical: 10,
    },
    sendText: {
      color: "#fff",
      fontWeight: "600",
    },
  });