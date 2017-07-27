import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import randomcolor from 'randomcolor';
import colors from '../../helpers/colors';

const Title = ({ title, text }) =>
  <View style={containerStyle}>
    <Text style={titleStyle}>BRENDOBRIEN</Text>
    <Text style={textStyle}>
      {text}
    </Text>
  </View>;

const { bbStyle, containerStyle, textStyle, titleStyle } = StyleSheet.create({
  bbStyle: {
    color: colors.white,
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    letterSpacing: 2.8,
    paddingBottom: 9,
    textAlign: 'center',
  },
  containerStyle: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 0.8,
    justifyContent: 'flex-end',
  },
  textStyle: {
    color: colors.white,
    fontFamily: 'open-sans',
    fontSize: 16,
    textAlign: 'center',
  },
  titleStyle: {
    color: colors.white,
    fontFamily: 'open-sans-bold',
    fontSize: 30,
    letterSpacing: 6,
    paddingLeft: 6,
    paddingBottom: 9,
    textAlign: 'center',
  },
});

export default Title;
