import React from 'react';
import { StatusBar } from 'react-native';
import Expo from 'expo';

// helpers
import colors from '../../helpers/colors';

import Card from './Card';

class Login extends React.Component {
  static navigationOptions = {
    gesturesEnabled: false,
    header: null,
  };

  render() {
    return (
      <Expo.LinearGradient
        colors={[colors.red, colors.lightBlue]}
        start={[0, 0]}
        end={[0, 1]}
        style={{ flex: 1 }}
      >
        <Card />
        <StatusBar barStyle="light-content" hidden={false} />
      </Expo.LinearGradient>
    );
  }
}

export default Login;
