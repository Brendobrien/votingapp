import React from 'react';
import { Text, View } from 'react-native';

import initFirebase from '../state/firebase/initFirebase';

import Banner from '../components/Banner';
import Chart from '../components/Chart';
import Menu from '../components/Menu';

class App extends React.Component {
  componentWillMount() {
    initFirebase();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Banner />
        <Menu />
      </View>
    );
  }
}

export default App;
