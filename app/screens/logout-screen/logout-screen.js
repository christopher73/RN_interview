/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../themes';
import {Button} from '../../components';
import {AuthContext} from '../../navigation';
import {removeData} from '../../utils';

export const LogoutScreen = () => {
  const {signOut} = React.useContext(AuthContext);
  const handlePress = () => {
    removeData().then(() => {
      signOut();
    });
  };

  return (
    <View style={styles.full}>
      <Text style={styles.title}>that's all folks</Text>
      <Button onPress={() => handlePress()} text="Logout" />
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
});
