import React from 'react';
import {
  Dimensions,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../helpers/colors';

const Button = ({ bottom, color, onPress, padding, title }) =>
  <View
    style={[
      containerStyle,
      {
        paddingLeft: padding - diff,
        paddingRight: padding - diff,
        paddingBottom: bottom || 20,
      },
    ]}
  >
    <TouchableOpacity
      style={[
        buttonStyle,
        {
          backgroundColor: color,
        },
      ]}
      onPress={onPress}
    >
      <View style={{ flex: 1 }} />
      <Text style={textStyle}>
        {title}
      </Text>
      <View style={arrowStyle}>
        <Ionicons name="ios-arrow-forward" size={32} color={colors.black} />
      </View>
    </TouchableOpacity>
  </View>;

const { width } = Dimensions.get('window');
const diff = (375 - width) / 2;

const {
  arrowStyle,
  buttonStyle,
  containerStyle,
  textStyle,
} = StyleSheet.create({
  arrowStyle: {
    alignItems: 'flex-end',
    flex: 1,
    justifyContent: 'center',
    paddingTop: 3,
    paddingRight: 5,
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: colors.red,
    borderRadius: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.55,
    shadowRadius: 8,
    width: '100%',
  },
  containerStyle: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
  },
  textStyle: {
    color: colors.black,
    flex: 9,
    fontFamily: 'open-sans-bold',
    fontSize: 16,
    letterSpacing: 2.8,
    textAlign: 'center',
  },
});

export default Button;
