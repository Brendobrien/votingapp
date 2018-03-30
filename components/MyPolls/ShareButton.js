import React from 'react';
import {
  Clipboard,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import goToRoute from '../../navigation/goToRoute';
import { firebaseUrl } from '../../helpers/constants';

const ShareButton = ({
  dispatch,
  history,
  language,
  pollId,
}) => (
  <TouchableOpacity
    onPress={() =>
      console.log(
        `${firebaseUrl}/poll-yes-no?pollId=${pollId}`,
      )
    }
    style={buttonStyle}
  >
    <Text
      style={[
        textStyle,
        {
          fontSize:
            language === 'English'
              ? 30
              : 20,
        },
      ]}
    >
      {language === 'English'
        ? 'Share'
        : 'Compartir'}
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
    fontSize: 20,
    textAlign: 'center',
  },
});

const ShareButtonComp =
  Platform.OS === 'web'
    ? withRouter(ShareButton)
    : ShareButton;

export default connect(
  ({ language }) => ({ language }),
)(ShareButtonComp);
