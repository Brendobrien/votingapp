import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';

import initFirebase from '../state/firebase/initFirebase';
import store from '../state/store';

import Banner from '../components/Banner';
import Chart from '../components/Chart';
import Menu from '../components/Menu';

class App extends React.Component {
  componentWillMount() {
    initFirebase();
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Banner />
          <Menu />
        </View>
      </Provider>
    );
  }
}

export default App;
