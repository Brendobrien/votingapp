import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { WebBrowser } from 'expo';

import colors from '../../helpers/colors';

const Disclaimer = () =>
  <TouchableOpacity
    onPress={() => WebBrowser.openBrowserAsync('http://legal.brainbuild.io')}
    style={containerStyle}
  >
    <Text style={textStyle}>
      By using Brainbuild, you agree to the{' '}
      <Text
        style={{
          fontFamily: 'open-sans-bold',
        }}
      >
        Liability{'\n'}Disclaimer, Privacy Policy,{' '}
      </Text>
      and{' '}
      <Text
        style={{
          fontFamily: 'open-sans-bold',
        }}
      >
        Terms & Conditions
      </Text>
    </Text>
  </TouchableOpacity>;

const { containerStyle, textStyle } = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 0.5,
    justifyContent: 'center',
  },
  textStyle: {
    color: colors.white,
    fontFamily: 'open-sans',
    fontSize: 10,
    opacity: 0.8,
    textAlign: 'center',
  },
});

export default Disclaimer;
