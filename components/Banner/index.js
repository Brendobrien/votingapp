/* @flow */

import React from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Banner = () => (
  <View style={styles.banner}>
    <TouchableOpacity onPress={() => console.log('home')}>
      <Text style={styles.title}>Gustar</Text>
    </TouchableOpacity>
  </View>
);

export default Banner;

const styles = StyleSheet.create({
  banner: {
    backgroundColor: '#673ab7',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: '200',
    color: '#fff',
    margin: 8,
  },
});
