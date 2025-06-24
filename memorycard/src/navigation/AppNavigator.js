import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@screens';
import PlayScreen from '@screens/client/play';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen 
        name="Login" 
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Play" 
        component={PlayScreen}
        options={{ headerLeft: null }}
      />
    </Stack.Navigator>
  );
};