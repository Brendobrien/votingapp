import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

export default ({ backgroundColor, flex, onPress, text }) => (
  <View style={[buttonStyle, { backgroundColor, flex }]} key={text}>
    <TouchableOpacity onPress={onPress}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  </View>
);

const { buttonStyle, textStyle } = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 30,
    textAlign: 'center',
  },
});
