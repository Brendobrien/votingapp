import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const SubHeader = props => {
  const { loading, location, nav } = props;
  const urls = {
    '/': 'Menu',
    '/all-polls': 'All Polls',
  };
  const routeName =
    Platform.OS === 'web'
      ? urls[location.pathname]
      : nav.routes[nav.index].routeName;
  const info = {
    Menu: {
      color: '#9F64C0',
      text: 'Menu',
    },
    AllPolls: {
      color: 'orange',
      text: 'All Polls',
    },
  };
  const fallback = {
    color: 'red',
    text: 'New Poll',
  };

  const { color, text } = info[routeName] || fallback;

  return loading ? null : (
    <View style={subHeaderStyle}>
      <Text style={[subHeaderTextStyle, { color }]}>{text}</Text>
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

const mapStateToProps = ({ loading, nav }) => ({ loading, nav });
const SubHeaderComp = Platform.OS === 'web' ? withRouter(SubHeader) : SubHeader;

export default connect(mapStateToProps)(SubHeaderComp);
