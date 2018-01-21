import React from 'react';
import { Text, View } from 'react-native';

import Banner from './components/Banner';
import Chart from './components/Chart';
import Menu from './components/Menu';

class App extends React.Component {
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
