import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatRoom from "./views/ChatRoom";
import HomeListFriend from "./views/HomeListFriend";
import DrawerChat from "./views/Chat/DrawerChat";
import Home from "./views/auth/components/Home";
import DangNhap from "./views/auth/screens/DangNhap";
import DangKy from "./views/auth/screens/DangKy";
import QuenMatKhau from "./views/auth/screens/QuenMatKhau";
import ResetMatKhau from "./views/auth/screens/ResetMatKhau";
import NhapMaOTP from "./views/auth/screens/NhapMaOTP";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="DangNhap" component={DangNhap}></Stack.Screen>
        <Stack.Screen name="DangKy" component={DangKy}></Stack.Screen>
        <Stack.Screen name="QuenMatKhau" component={QuenMatKhau}></Stack.Screen>
        <Stack.Screen
          name="ResetMatKhau"
          component={ResetMatKhau}
        ></Stack.Screen>
        <Stack.Screen name="NhapMaOTP" component={NhapMaOTP}></Stack.Screen>
        <Stack.Screen name="HomeListFriend" component={HomeListFriend} />
        <Stack.Screen name="ChatRoom" component={ChatRoom} />
        <Stack.Screen name="DrawerChat" component={DrawerChat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
