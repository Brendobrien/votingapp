import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import icons from '../../assets/icons';

export default () =>
  <View style={containerStyle}>
    <Image source={icons.loading} style={imageStyle} />
  </View>;

const { containerStyle, imageStyle } = StyleSheet.create({
  containerStyle: {
    paddingTop: 70,
  },
  imageStyle: {
    height: 95,
    resizeMode: 'cover',
    width: 95,
  },
});
