import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import HeaderRoomChat from "../component/Room/HeaderRoomChat";
import BodyRoomChat from "../component/Room/BodyRoomChat";
import Footter_Chat from "../component/Room/Footter_Chat";

export default function ChatRoom({ navigation }) {
  return (
    <View style={styles.container}>
      <HeaderRoomChat navigation={navigation} />
      <BodyRoomChat />
      <Footter_Chat />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
