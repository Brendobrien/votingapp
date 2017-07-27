import React from 'react';
import { AppLoading } from 'expo';
import { View } from 'react-native';
import { Provider } from 'react-redux';

// helpers
import cacheAssets from './assets/cache';

// navigation
import AppWithNavState from './navigation/AppWithNavState';

// state
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
        <Provider store={Store}>
          <View
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }}
          >
            <AppWithNavState />
          </View>
        </Provider>
      );
    }

    return <AppLoading />;
  }
}

export default App;
