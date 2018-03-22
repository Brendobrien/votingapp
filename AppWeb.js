/* @flow */

import React from 'react';
import { AppRegistry } from 'react-native';

import { AppContainer } from 'react-hot-loader';
import 'react-hot-loader/patch';

import { BrowserRouter } from 'react-router-dom';

import Root from './components';

const renderApp = () => (
  <AppContainer>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </AppContainer>
);

AppRegistry.registerComponent('ReactNativeWebBoilerplate', () => renderApp);

if (module.hot) {
  // $FlowFixMe
  module.hot.accept();

  const renderHotApp = () => (
    <AppContainer>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </AppContainer>
  );

  // App registration and rendering
  AppRegistry.registerComponent(
    'ReactNativeWebBoilerplate',
    () => renderHotApp,
  );
}

AppRegistry.runApplication('ReactNativeWebBoilerplate', {
  rootTag: document.getElementById('root'),
});
