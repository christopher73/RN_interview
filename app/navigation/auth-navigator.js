import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthScreen} from '../screens/auth-screen';

const Stack = createStackNavigator();

export function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <Stack.Screen name="welcome" component={AuthScreen} />
    </Stack.Navigator>
  );
}
