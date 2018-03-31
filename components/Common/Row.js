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
  text,
}) => (
  <TouchableOpacity
    disabled={
      typeof onPress !== 'function'
    }
    onPress={onPress}
    style={[
      buttonStyle,
      {
        backgroundColor,
        flex,
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
    minHeight: 100,
  },
  textStyle: {
    fontSize: 30,
    textAlign: 'center',
  },
});
