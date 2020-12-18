/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {colors} from '../themes';

const width = Dimensions.get('screen').width;

export const Button = (props) => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: 40,
    width: width * 0.8,
    borderColor: colors.palette.lighterGrey,
    marginBottom: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primaryDarker,
    borderWidth: 0,
  },
  text: {
    fontSize: 18,
    color: colors.palette.white,
  },
});
