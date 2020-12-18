/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../themes';
import {getData} from '../../utils';
const width = Dimensions.get('screen').width;

export const WelcomeScreen = ({navigation}) => {
  const [user, setUser] = React.useState('');
  React.useEffect(() => {
    const getUserData = async () => {
      const info = await getData();
      setUser(info.userName);
    };
    getUserData();
  }, [user]);
  return (
    <View style={styles.full}>
      <Text style={styles.title}>
        Welcome {user.charAt(0).toUpperCase() + user.slice(1) + '\n'} to my RN
        coding coding challenge
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('logout')}
        style={{
          ...styles.textInput,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.palette.lightGrey,
          borderWidth: 0,
        }}>
        <Text style={styles.button}>Continue</Text>
      </TouchableOpacity>
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
    textAlign: 'center',
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
