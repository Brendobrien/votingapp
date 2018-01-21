import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default ({ percentFace = 0.2, percentRest = 0.4 }) => (
  <View style={{ flex: 1 }}>
    <View style={[restStyle, { flex: percentRest }]} />
    <TouchableOpacity style={[faceStyle, { flex: percentFace }]}>
      <Text style={textStyle}>Sign in to Facebook</Text>
    </TouchableOpacity>
    <View style={[restStyle, { flex: percentRest }]} />
  </View>
);

const { faceStyle, restStyle, textStyle } = StyleSheet.create({
  faceStyle: {
    alignItems: 'center',
    backgroundColor: 'blue',
    justifyContent: 'center',
  },
  restStyle: {
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 30,
    textAlign: 'center',
  },
});
