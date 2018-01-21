import React from 'react';
import { AppLoading } from 'expo';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import Chart from './components/Chart';
import cacheAssets from './assets/cache';
import AppWithNavState from './navigation/AppWithNavState';
import Store from './state/store';

class App extends React.Component {
  state = {
    appIsReady: false,
  };

  componentWillMount() {
    this.loadAssetsAsync();
    console.ignoredYellowBox = ['Setting a timer'];
  }

  async loadAssetsAsync() {
    await cacheAssets();

    this.setState({
      appIsReady: true,
    });
  }

  render() {
    if (this.state.appIsReady) {
      return (
        <View style={{ flex: 1 }}>
          <Chart />
        </View>
      );
    }

    return <AppLoading />;
  }
}

export default App;
