import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';

export default ({ uri }) => (
  <View style={containerStyle}>
    <Image source={{ uri }} style={imgStyle} />
  </View>
);

const { containerStyle, imgStyle } = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
  },
  imgStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
  },
});
