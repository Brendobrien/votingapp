import React from 'react';
import { YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import _ from 'lodash';

import initFirebase from '../state/firebase/initFirebase';
import store from '../state/store';

import AppWithNavState from '../navigation/AppWithNavState';

class App extends React.Component {
  componentWillMount() {
    YellowBox.ignoreWarnings([
      'Setting a timer',
    ]);
    const _console = _.clone(console);
    console.warn = message => {
      if (
        message.indexOf(
          'Setting a timer',
        ) <= -1
      ) {
        _console.warn(message);
      }
    };
    initFirebase();
    fetch(
      'https://api.ipify.org?format=json',
    )
      .then(x => x.json())
      .then(x => console.log(x));
  }

  render() {
    return (
      <Provider store={store}>
        <AppWithNavState />
      </Provider>
    );
  }
}

export default App;
