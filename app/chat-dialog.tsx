import {
    FlatList,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
  
  export default function ChatbotDialogScreen() {
    // UI-only dummy messages
    const messages = [
      { id: "1", sender: "bot", text: "Hi! I’m the StyleVault chatbot 🤖" },
      { id: "2", sender: "bot", text: "How can I help you today?" },
    ];
  
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.root}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>StyleVault Chatbot</Text>
  
            <Pressable style={styles.backButton}>
              <Text style={styles.backText}>Back</Text>
            </Pressable>
          </View>
  
          {/* Messages */}
          <FlatList
            data={messages}
            keyExtractor={(item) => item.id}
            style={styles.chatList}
            contentContainerStyle={{ padding: 4 }}
            renderItem={({ item }) => (
              <View
                style={[
                  styles.messageBubble,
                  item.sender === "bot"
                    ? styles.botBubble
                    : styles.userBubble,
                ]}
              >
                <Text style={styles.messageText}>{item.text}</Text>
              </View>
            )}
          />
  
          {/* Input Area */}
          <View style={styles.inputRow}>
            <TextInput
              placeholder="Type your message"
              placeholderTextColor="#AAA"
              style={styles.input}
            />
  
            <Pressable style={styles.sendButton}>
              <Text style={styles.sendText}>Send</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    );
  }
  const styles = StyleSheet.create({
    safe: {
      flex: 1,
      backgroundColor: "#111",
    },
  
    root: {
      flex: 1,
      padding: 16,
      backgroundColor: "#111",
    },
  
    /* Header */
    header: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 8,
    },
    title: {
      flex: 1,
      color: "#fff",
      fontSize: 18,
      fontWeight: "700",
    },
    backButton: {
      backgroundColor: "#333",
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 6,
    },
    backText: {
      color: "#fff",
    },
  
    /* Chat list */
    chatList: {
      height: 300,
      backgroundColor: "#222",
      borderRadius: 8,
      marginVertical: 8,
    },
  
    /* Message bubbles */
    messageBubble: {
      padding: 8,
      borderRadius: 6,
      marginBottom: 6,
      maxWidth: "80%",
    },
    botBubble: {
      backgroundColor: "#333",
      alignSelf: "flex-start",
    },
    userBubble: {
      backgroundColor: "#444",
      alignSelf: "flex-end",
    },
    messageText: {
      color: "#fff",
    },
  
    /* Input row */
    inputRow: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 8,
    },
    input: {
      flex: 1,
      backgroundColor: "#333",
      padding: 8,
      borderRadius: 6,
      color: "#fff",
    },
    sendButton: {
      marginLeft: 8,
      backgroundColor: "#444",
      paddingHorizontal: 14,
      paddingVertical: 8,
      borderRadius: 6,
    },
    sendText: {
      color: "#fff",
      fontWeight: "600",
    },
  }); 