import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AppNavigator} from './app-navigator';
import {AuthNavigator} from './auth-navigator';
import {LoadingScreen} from '../screens/loading-screen/loading-screen';
import {getData, storeData, fakeAPIcall} from '../utils';
const Stack = createStackNavigator();

/**
 * React context will provide easer access to auth functions
 */
export const AuthContext = React.createContext();

export const RootNavigator = () => {
  /**
   *
   * useReducer creates the state of the auth flow
   * redux or mobx won't be necessary due to the complexity of the app
   *
   * */
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'LOADING':
          return {
            ...prevState,
            isLoading: true,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            userData: action.userData,
            isLoading: false,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            userData: null,
            isLoading: false,
          };
      }
    },
    {
      isLoading: true,
    },
  );
  /**
   * useMemo will persist the data
   */
  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        try {
          dispatch({type: 'LOADING'});
          const userData = await fakeAPIcall.getUser({
            userName: data.userName,
            password: data.password,
          });
          await storeData(userData);
          dispatch({type: 'SIGN_IN', userData: userData});
        } catch {
          dispatch({type: 'SIGN_OUT'});
        }
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
    }),
    [],
  );
  /**
   *
   * check if variable @userData locally stored in the device
   *
   */
  React.useEffect(() => {
    getData().then((data) => {
      console.log(data);
      data === null
        ? dispatch({type: 'SIGN_OUT'})
        : dispatch({type: 'SIGN_IN', userData: data});
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
          ) : state.userData === null ? (
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
