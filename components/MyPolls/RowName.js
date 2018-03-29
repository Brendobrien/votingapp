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

const RowName = ({
  backgroundColor,
  dispatch,
  history,
  text,
}) => (
  <TouchableOpacity
    onPress={() =>
      goToRoute(
        dispatch,
        history,
        'PollYesNo',
      )
    }
    style={[
      buttonStyle,
      { backgroundColor },
    ]}
  >
    <Text style={textStyle}>
      {text}
    </Text>
  </TouchableOpacity>
);

const {
  buttonStyle,
  textStyle,
} = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    flex: 0.7,
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 30,
    textAlign: 'center',
  },
});

const RowNameComp =
  Platform.OS === 'web'
    ? withRouter(RowName)
    : RowName;

export default connect()(RowNameComp);
