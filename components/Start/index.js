import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { values } from 'lodash';

import Spinner from '../Common/Spinner';
import Icon from './Icon';

class Start extends React.Component {
  static navigationOptions = {
    gesturesEnabled: false,
    header: null,
  };

  componentWillMount() {
    setTimeout(() => this.props.navigation.navigate('Login'), 2000);
  }

  render() {
    return (
      <View style={containerStyle}>
        <Icon />
        <Spinner />
        <StatusBar barStyle="dark-content" />
      </View>
    );
  }
}

const { containerStyle } = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

const mapStateToProps = state => ({
  loading: values(state.loading).includes(true),
});

export default connect(mapStateToProps)(Start);
