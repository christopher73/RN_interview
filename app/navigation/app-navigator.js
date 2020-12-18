import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LogoutScreen} from '../screens/logout-screen/logout-screen';
import {WelcomeScreen} from '../screens/welcome-screen/welcome-screen';

const Stack = createStackNavigator();

export function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="logout" component={LogoutScreen} />
    </Stack.Navigator>
  );
}
