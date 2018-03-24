import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Loading from '../Loading';

// TODO: screenText/background in Redux State
const backgroundColor = '#9F64C0';
const Header = ({
  children,
  history,
  loading,
  location,
  screenText = 'Menu',
  color = 'red',
}) => (
  <View style={{ flex: 1 }}>
    <View>
      {location.pathname !== '/' ? (
        <View style={headerStyle}>
          <TouchableOpacity onPress={() => history.goBack()}>
            <Text style={headerTextStyle}>{'<'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => history.push('/')}>
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

const mapStateToProps = ({ loading }) => ({ loading });

export default connect(mapStateToProps)(withRouter(Header));
