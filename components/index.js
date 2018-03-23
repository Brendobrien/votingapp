import React from 'react';
import { Platform, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import initFirebase from '../state/firebase/initFirebase';
import store from '../state/store';

import Chart from '../components/Chart';
import Menu from '../components/Menu';

import WebNavigator from '../navigation/WebNavigator';

class App extends React.Component {
  componentWillMount() {
    initFirebase();
  }

  render() {
    return (
      <Provider store={store}>
        {Platform.OS === 'web' ? <WebNavigator /> : <Menu />}
      </Provider>
    );
  }
}

export default App;
