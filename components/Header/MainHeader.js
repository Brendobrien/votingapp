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
import goInfo from '../../navigation/goInfo';

const backgroundColor = '#9F64C0';
const MainHeader = ({
  dispatch,
  history,
  location,
  nav,
}) => {
  let infoBool, rootBool;
  if (Platform.OS === 'web') {
    infoBool =
      location.pathname === '/info';
    rootBool =
      location.pathname === '/';
  } else {
    infoBool =
      nav.routes[nav.index]
        .routeName === 'Info';
    rootBool = nav.index === 0;
  }

  return (
    <View style={headerStyle}>
      <TouchableOpacity
        disabled={rootBool}
        onPress={() =>
          goBack(dispatch, history)
        }
      >
        <Text
          style={[
            headerTextStyle,
            {
              color: rootBool
                ? backgroundColor
                : 'white',
            },
          ]}
        >
          {'<'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={rootBool}
        onPress={() =>
          goHome(dispatch, history)
        }
      >
        <Text style={headerTextStyle}>
          Gustar
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={infoBool}
        onPress={() =>
          goInfo(dispatch, history)
        }
      >
        <Text style={headerTextStyle}>
          {'?'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const {
  headerStyle,
  headerTextStyle,
} = StyleSheet.create({
  headerStyle: {
    backgroundColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    paddingTop:
      Platform.OS === 'android'
        ? 36
        : 16,
  },
  headerTextStyle: {
    fontSize: 30,
    fontWeight: '200',
    color: '#fff',
    margin: 8,
  },
});

const mapStateToProps = ({ nav }) => ({
  nav,
});
const MainHeaderComp =
  Platform.OS === 'web'
    ? withRouter(MainHeader)
    : MainHeader;

export default connect(mapStateToProps)(
  MainHeaderComp,
);
