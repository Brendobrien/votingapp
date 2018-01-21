import React from 'react';
import { AppLoading } from 'expo';
import { View } from 'react-native';
import { Provider } from 'react-redux';

// helpers
import cacheAssets from '../assets/cache';
// import initFB from ',./state/firebase/initFB';

// navigation
import AppWithNavState from '../navigation/AppWithNavState';

// state
import Store from '../state/store';

import Banner from '../components/Banner';
import Chart from '../components/Chart';
import Menu from '../components/Menu';

class App extends React.Component {
  state = {
    appIsReady: false,
  };

  componentWillMount() {
    this.loadAssetsAsync();
    console.ignoredYellowBox = ['Setting a timer'];
    // initFB();
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
          <Banner />
          <Menu />
        </View>
      );
    }

    return <AppLoading />;
  }
}

export default App;
