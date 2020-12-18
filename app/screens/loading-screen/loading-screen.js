/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../themes';

export const LoadingScreen = () => {
  return (
    <View style={styles.full}>
      <Text style={styles.title}>Loading ...</Text>
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
