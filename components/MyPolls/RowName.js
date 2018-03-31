import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default ({
  backgroundColor,
  onPress,
  text,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      buttonStyle,
      { backgroundColor },
    ]}
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
    flex: 0.7,
    justifyContent: 'center',
    minHeight: 100,
  },
  textStyle: {
    fontSize: 30,
    textAlign: 'center',
  },
});
