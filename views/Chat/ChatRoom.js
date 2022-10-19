import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import HeaderRoomChat from "../../component/HeaderRoomChat";

export default function ChatRoom({navigation}) {
  return (
    <View style={styles.container}>
       <HeaderRoomChat navigation={navigation}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
