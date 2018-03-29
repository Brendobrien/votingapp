import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import goToRoute from '../../navigation/goToRoute';

const EditButton = ({
  dispatch,
  history,
  language,
}) => (
  <TouchableOpacity
    onPress={() =>
      goToRoute(
        dispatch,
        history,
        'Info',
      )
    }
    style={buttonStyle}
  >
    <Text style={textStyle}>
      {language === 'English'
        ? 'Edit'
        : 'Editar'}
    </Text>
  </TouchableOpacity>
);

const {
  buttonStyle,
  textStyle,
} = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#9F64C0',
    flex: 0.5,
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },
});

const EditButtonComp =
  Platform.OS === 'web'
    ? withRouter(EditButton)
    : EditButton;

export default connect(
  ({ language }) => ({ language }),
)(EditButtonComp);
