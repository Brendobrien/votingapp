/* @flow */

import React from 'react';
import { AppRegistry } from 'react-native';
import { AppContainer } from 'react-hot-loader';
import 'react-hot-loader/patch';

import App from './components';

const renderApp = () => (
  <AppContainer>
    <App />
  </AppContainer>
);

AppRegistry.registerComponent(
  'ReactNativeWebBoilerplate',
  () => renderApp,
);

if (module.hot) {
  // $FlowFixMe
  module.hot.accept();

  const renderHotApp = () => (
    <AppContainer>
      <App />
    </AppContainer>
  );

  // App registration and rendering
  AppRegistry.registerComponent(
    'ReactNativeWebBoilerplate',
    () => renderHotApp,
  );
}

AppRegistry.runApplication(
  'ReactNativeWebBoilerplate',
  {
    rootTag: document.getElementById(
      'root',
    ),
  },
);
