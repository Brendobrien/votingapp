import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import getSubText from './getSubText';

const SubHeader = props => {
  const { color, text } = getSubText(props);

  return props.loading ? null : (
    <View style={subHeaderStyle}>
      <Text style={[subHeaderTextStyle, { color }]}>
        {text[props.language]}
      </Text>
    </View>
  );
};

const { subHeaderStyle, subHeaderTextStyle } = StyleSheet.create({
  subHeaderStyle: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  subHeaderTextStyle: {
    fontSize: 20,
    fontWeight: '900',
    color: 'white',
    margin: 2,
  },
});

const mapStateToProps = ({ language, loading, nav }) => ({
  language,
  loading,
  nav,
});
const SubHeaderComp = Platform.OS === 'web' ? withRouter(SubHeader) : SubHeader;

export default connect(mapStateToProps)(SubHeaderComp);
