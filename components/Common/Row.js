import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

export default ({
  backgroundColor,
  flex,
  onPress,
  minHeight = 100,
  rowStyle,
  text,
}) => (
  <TouchableOpacity
    disabled={
      typeof onPress !== 'function'
    }
    onPress={onPress}
    style={[
      buttonStyle,
      rowStyle,
      {
        backgroundColor,
        flex,
        minHeight,
      },
    ]}
    key={text}
  >
    <Text style={textStyle}>
      {text}
    </Text>
  </TouchableOpacity>
);

const {
  buttonStyle,
  textStyle,
} = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 30,
    textAlign: 'center',
  },
});
