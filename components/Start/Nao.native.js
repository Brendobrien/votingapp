import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default () => (
  <View style={containerStyle}>
    <Text style={textStyle}>Dallas on the web</Text>
  </View>
);

const { containerStyle, textStyle } = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
  },
  textStyle: {
    color: 'black',
    fontFamily: 'open-sans-bold',
    fontSize: 18,
  },
});
