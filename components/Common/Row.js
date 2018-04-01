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
  textStyle,
}) => (
  <TouchableOpacity
    disabled={
      typeof onPress !== 'function'
    }
    onPress={onPress}
    style={[
      containerStyle,
      rowStyle,
      {
        backgroundColor,
        flex,
        minHeight,
      },
    ]}
    key={text}
  >
    <Text
      style={[mainTextStyle, textStyle]}
    >
      {text}
    </Text>
  </TouchableOpacity>
);

const {
  containerStyle,
  mainTextStyle,
} = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainTextStyle: {
    fontSize: 30,
    textAlign: 'center',
  },
});
