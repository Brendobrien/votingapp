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
import { firebaseUrl } from '../../helpers/constants';
import sharePoll from '../../state/polls/sharePoll';

const ShareButton = ({
  language,
  pollId,
  sharePoll,
}) => (
  <TouchableOpacity
    onPress={() => {
      const url = `${firebaseUrl}/poll-yes-no?pollId=${pollId}`;
      Clipboard.setString(url);
      sharePoll(url);
    }}
    style={buttonStyle}
  >
    {language === 'English' ? (
      <Text
        style={[
          textStyle,
          { fontSize: 30 },
        ]}
      >
        Share
      </Text>
    ) : (
      <Text
        style={[
          textStyle,
          { fontSize: 20 },
        ]}
      >
        Compartir
      </Text>
    )}
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

export default connect(
  ({ language }) => ({ language }),
  { sharePoll },
)(ShareButton);
