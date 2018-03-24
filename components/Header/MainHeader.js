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

import goBack from '../../navigation/goBack';
import goHome from '../../navigation/goHome';

const backgroundColor = '#9F64C0';
const MainHeader = props => {
  let rootBool, backFunc, homeFunc;
  if (Platform.OS === 'web') {
    const { history, location } = props;
    rootBool = location.pathname !== '/';
    backFunc = () => history.goBack();
    homeFunc = () => history.push('/');
  } else {
    const { goBack, goHome, nav } = props;
    rootBool = nav.index !== 0;
    backFunc = goBack;
    homeFunc = goHome;
  }

  return rootBool ? (
    <View style={headerStyle}>
      <TouchableOpacity onPress={backFunc}>
        <Text style={headerTextStyle}>{'<'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={homeFunc}>
        <Text style={headerTextStyle}>Gustar</Text>
      </TouchableOpacity>
      <View>
        <Text style={[headerTextStyle, { color: backgroundColor }]}>{'<'}</Text>
      </View>
    </View>
  ) : (
    <View style={headerStyle}>
      <View />
      <Text style={headerTextStyle}>Gustar</Text>
      <View />
    </View>
  );
};

const { headerStyle, headerTextStyle } = StyleSheet.create({
  headerStyle: {
    backgroundColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  headerTextStyle: {
    fontSize: 30,
    fontWeight: '200',
    color: '#fff',
    margin: 8,
  },
});

const mapStateToProps = ({ nav }) => ({ nav });
const MainHeaderComp =
  Platform.OS === 'web' ? withRouter(MainHeader) : MainHeader;

export default connect(mapStateToProps, {
  goBack,
  goHome,
})(MainHeaderComp);
