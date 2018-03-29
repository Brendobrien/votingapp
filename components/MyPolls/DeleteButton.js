import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';

const DeleteButton = ({ language }) => (
  <TouchableOpacity
    onPress={() =>
      console.log('dispatch delete')
    }
    style={buttonStyle}
  >
    <Text style={textStyle}>
      {language === 'English'
        ? 'Delete'
        : 'Borrar'}
    </Text>
  </TouchableOpacity>
);

const {
  buttonStyle,
  textStyle,
} = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 0.5,
    justifyContent: 'center',
  },
  textStyle: {
    color: '#9F64C0',
    fontSize: 30,
    textAlign: 'center',
  },
});

export default connect(
  ({ language }) => ({ language }),
)(DeleteButton);
