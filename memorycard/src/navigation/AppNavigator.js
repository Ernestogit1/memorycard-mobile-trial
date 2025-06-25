import React, { useEffect } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';

import LoginScreen from '@screens';
import PlayScreen from '@screens/client/play';
import { loaduserData } from '@redux/auth/auth.actions';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {

   const dispatch = useDispatch();
  const { token, user } = useSelector(state => state.auth);
  
  useEffect(() => {
    dispatch(loaduserData()).catch(() => {
      console.log('No valid token found');
    });
  }, []);
  return (
 <Stack.Navigator>
      {token ? (
        <Stack.Screen 
          name="Play" 
          component={PlayScreen}
          options={{ 
            headerLeft: () => null,
            gestureEnabled: false
          }}
        />
      ) : (
        <Stack.Screen 
          name="Login" 
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
};