/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../themes';

import {AuthContext} from '../../navigation';
import {Button, TextInput} from '../../components';

export const AuthScreen = () => {
  const {signIn} = React.useContext(AuthContext);

  /**
   * @warning
   * if userName or password === "" then warning is true
   * */
  const [warning, setwarning] = React.useState(false);

  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handlePress = () => {
    setwarning(false);
    signIn({userName: userName, password: password});
  };
  return (
    <View style={styles.full}>
      <Text style={styles.title}> RN coding challenge =)</Text>
      {warning ? <Text>Please provide a username and password </Text> : null}
      <View>
        <TextInput
          placeholder="Username"
          warning={warning}
          autoCompleteType="username"
          value={userName}
          onChangeText={(text) => setUserName(text)}
        />
        <TextInput
          placeholder="Password"
          warning={warning}
          secureTextEntry={true}
          textContentType="password"
          autoCompleteType="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button
          text="Login"
          onPress={() => {
            userName === '' || password === ''
              ? setwarning(true)
              : handlePress();
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  full: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 25,
    color: colors.palette.black,
  },
});
