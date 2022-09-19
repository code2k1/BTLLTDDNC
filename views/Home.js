import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Item from "../component/Item";
import Search from "../component/Search";

export default function Home({navigation}) {
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Search/>
      <Item image={require('../image/img1.png')} userName='Võ Minh Hiếu' description='Chào các bạn' page='ChatRoom' navigation={navigation}/>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
