import Expo from 'expo';
import React from 'react';
import { StatusBar } from 'react-native';
import Card from './Card';
import Deck from './Deck';
import getData from './getData';
import Nao from './Nao';

// helpers
import colors from '../../helpers/colors';

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
        <Deck
          data={getData()}
          renderCard={({ uri }) => <Card uri={uri} />}
          renderNoMoreCards={() => <Nao />}
        />
        <StatusBar barStyle="light-content" hidden={false} />
      </Expo.LinearGradient>
    );
  }
}

export default Login;
