import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import scaleImg from '../../helpers/scaleImg';

const Logo = ({ source, size }) =>
  <View style={containerStyle}>
    <Image source={source} style={scaleImg(size[0], size[1])} />
  </View>;

const { containerStyle } = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    flex: 0.8,
    justifyContent: 'flex-end',
    paddingTop: 50,
  },
});

export default Logo;
