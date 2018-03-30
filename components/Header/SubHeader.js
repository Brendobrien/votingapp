import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';

const SubHeader = ({
  color,
  language,
  loading,
  text,
}) =>
  loading ? null : (
    <View style={subHeaderStyle}>
      <Text
        style={[
          subHeaderTextStyle,
          { color },
        ]}
      >
        {text[language]}
      </Text>
    </View>
  );

const {
  subHeaderStyle,
  subHeaderTextStyle,
} = StyleSheet.create({
  subHeaderStyle: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  subHeaderTextStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '900',
    margin: 2,
    textAlign: 'center',
  },
});

const mapStateToProps = ({
  language,
  loading,
}) => ({
  language,
  loading,
});

export default connect(mapStateToProps)(
  SubHeader,
);
