import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

// TODO: screenText/background from Nav
const SubHeader = props => {
  const { history, loading, nav } = props;
  const color = '#9F64C0';
  const screenText = 'Menu';

  return loading ? null : (
    <View style={subHeaderStyle}>
      <Text style={[subHeaderTextStyle, { color }]}>{screenText}</Text>
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
