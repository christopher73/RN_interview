import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AppNavigator} from './app-navigator';
import {AuthNavigator} from './auth-navigator';
import {LoadingScreen} from '../screens/loading-screen/loading-screen';
import {getData} from '../utils';

const Stack = createStackNavigator();

export const RootNavigator = () => {
  const AuthContext = React.createContext();
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            isLoading: false,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            isLoading: false,
          };
      }
    },
    {
      isLoading: true,
    },
  );
  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => dispatch({type: 'SIGN_IN'}),
      signOut: () => dispatch({type: 'SIGN_OUT'}),
    }),
    [],
  );
  React.useEffect(() => {
    getData().then((data) => {
      data === null
        ? dispatch({type: 'SIGN_OUT'})
        : dispatch({type: 'SIGN_IN'});
    });
  }, []);
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: true,
          }}>
          {state.isLoading ? (
            <Stack.Screen name="loading" component={LoadingScreen} />
          ) : state.isSignout ? (
            <Stack.Screen
              name="authStack"
              component={AuthNavigator}
              options={{
                headerShown: false,
              }}
            />
          ) : (
            <Stack.Screen
              name="appStack"
              component={AppNavigator}
              options={{
                headerShown: false,
              }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
