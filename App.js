import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatRoom from './views/ChatRoom';
import Home from './views/Home';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen  name="Home" component={Home}/>
        <Stack.Screen  name="ChatRoom" component={ChatRoom}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


