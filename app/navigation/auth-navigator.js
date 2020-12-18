import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthScreen} from '../screens/auth-screen/auth-screen';

const Stack = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <Stack.Screen name="Authscreen" component={AuthScreen} />
    </Stack.Navigator>
  );
};
