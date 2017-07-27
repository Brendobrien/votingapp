import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

export default ({ size }) =>
  <View style={spinnerStyle}>
    <ActivityIndicator color="black" size={size || 'large'} />
  </View>;

const { spinnerStyle } = StyleSheet.create({
  spinnerStyle: {
    marginTop: 70,
  },
});
