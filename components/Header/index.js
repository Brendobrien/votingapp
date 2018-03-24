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

import Loading from '../Loading';

import goBack from '../../navigation/goBack';
import goHome from '../../navigation/goHome';

// TODO: screenText/background in Redux State
const backgroundColor = '#9F64C0';
const Header = props => {
  const { children, loading } = props;
  const color = 'red';
  const screenText = 'Menu';
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

  return (
    <View style={{ flex: 1 }}>
      <View>
        {rootBool ? (
          <View style={headerStyle}>
            <TouchableOpacity onPress={backFunc}>
              <Text style={headerTextStyle}>{'<'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={homeFunc}>
              <Text style={headerTextStyle}>Gustar</Text>
            </TouchableOpacity>
            <View>
              <Text style={[headerTextStyle, { color: backgroundColor }]}>
                {'<'}
              </Text>
            </View>
          </View>
        ) : (
          <View style={headerStyle}>
            <View />
            <Text style={headerTextStyle}>Gustar</Text>
            <View />
          </View>
        )}
        {loading ? null : (
          <View style={subHeaderStyle}>
            <Text style={[subHeaderTextStyle, { color }]}>{screenText}</Text>
          </View>
        )}
      </View>
      {loading ? <Loading /> : children}
    </View>
  );
};

const {
  headerStyle,
  headerTextStyle,
  subHeaderStyle,
  subHeaderTextStyle,
} = StyleSheet.create({
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
const HeaderComponent = Platform.OS === 'web' ? withRouter(Header) : Header;

export default connect(mapStateToProps, {
  goBack,
  goHome,
})(HeaderComponent);
