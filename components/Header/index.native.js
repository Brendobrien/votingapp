import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import goBack from '../../navigation/goBack';
import goHome from '../../navigation/goHome';

// TODO: screenText/background in Redux State
const backgroundColor = '#9F64C0';
const Header = ({
  children,
  color = 'red',
  goBack,
  goHome,
  nav,
  screenText = 'Menu',
}) => (
  <View style={{ flex: 1 }}>
    <View>
      {nav.index !== 0 ? (
        <View style={headerStyle}>
          <TouchableOpacity onPress={goBack}>
            <Text style={headerTextStyle}>{'<'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goHome}>
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
      <View style={subHeaderStyle}>
        <Text style={[subHeaderTextStyle, { color }]}>{screenText}</Text>
      </View>
    </View>
    {children}
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

const mapStateToProps = ({ nav }) => ({ nav });

export default connect(mapStateToProps, {
  goBack,
  goHome,
})(Header);
