/* @flow */

import React from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// TODO: screenText/background in Redux State
const Banner = ({ screenText = 'Menu', color = 'red' }) => (
  <View>
    <View style={headerStyle}>
      <TouchableOpacity onPress={() => console.log('Gustar')}>
        <Text style={headerTextStyle}>Gustar</Text>
      </TouchableOpacity>
    </View>
    <View style={subHeaderStyle}>
      <Text style={[subHeaderTextStyle, { color }]}>{screenText}</Text>
    </View>
  </View>
);

const {
  headerStyle,
  headerTextStyle,
  subHeaderStyle,
  subHeaderTextStyle,
} = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#673ab7',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
  headerTextStyle: {
    fontSize: 30,
    fontWeight: '200',
    color: '#fff',
    margin: 8,
  },
  subHeaderStyle: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  subHeaderTextStyle: {
    fontSize: 20,
    fontWeight: '900',
    color: 'white',
    margin: 2,
  },
});

export default Banner;
