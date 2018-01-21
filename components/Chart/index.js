import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default ({ percentNo = 0.5, percentSi = 0.5 }) => (
  <View style={{ flex: 1 }}>
    <TouchableOpacity style={[siStyle, { flex: percentSi }]}>
      <Text style={textStyle}>Si{`\n${percentNo * 100}`}%</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[noStyle, { flex: percentNo }]}>
      <Text style={textStyle}>No{`\n${percentNo * 100}`}% </Text>
    </TouchableOpacity>
  </View>
);

const { noStyle, siStyle, textStyle } = StyleSheet.create({
  noStyle: {
    alignItems: 'center',
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
  },
  siStyle: {
    alignItems: 'center',
    backgroundColor: 'green',
    flex: 1,
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 30,
    textAlign: 'center',
  },
});
