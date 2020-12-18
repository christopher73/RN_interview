import React from 'react';
import {StyleSheet, TextInput as Input, Dimensions} from 'react-native';
import {colors} from '../themes';

const width = Dimensions.get('screen').width;

export const TextInput = (props) => {
  return (
    <Input
      {...props}
      style={{
        ...styles.textInput,
        borderColor: props.warning
          ? colors.palette.error
          : colors.palette.lighterGrey,
      }}
    />
  );
};
const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    height: 40,
    width: width * 0.8,
    borderWidth: 2,
    borderColor: colors.palette.lighterGrey,
    marginBottom: 10,
    borderRadius: 5,
  },
});
