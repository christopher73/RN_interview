import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {colors} from '../../themes';
const width = Dimensions.get('screen').width;

export const AuthScreen = () => {
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.full}>
      <Text style={styles.title}> RN coding challenge =)</Text>
      <View>
        <TextInput
          placeholder="Username"
          style={styles.textInput}
          autoCompleteType="username"
          value={userName}
          onChangeText={(text) => setUserName(text)}
        />
        <TextInput
          placeholder="Password"
          style={styles.textInput}
          secureTextEntry={true}
          textContentType="password"
          autoCompleteType="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          style={{
            ...styles.textInput,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.primaryDarker,
            borderWidth: 0,
          }}>
          <Text style={styles.button}>Login</Text>
        </TouchableOpacity>
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
  container: {
    backgroundColor: colors.transparent,
    paddingHorizontal: 4,
  },
  title: {
    // marginTop: height * 0.15,
    // marginBottom: height * 0.15,
    fontSize: 25,
    color: colors.palette.black,
  },
  textInput: {
    padding: 10,
    height: 40,
    width: width * 0.8,
    borderWidth: 2,
    borderColor: colors.palette.lighterGrey,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    fontSize: 18,
    color: colors.palette.white,
  },
});
