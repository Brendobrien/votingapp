import React from 'react';
import { Provider } from 'react-redux';

import initFirebase from '../state/firebase/initFirebase';
import store from '../state/store';

import WebNavigator from '../navigation/WebNavigator';

class App extends React.Component {
  componentWillMount() {
    initFirebase();
  }

  render() {
    return (
      <Provider store={store}>
        <WebNavigator />
      </Provider>
    );
  }
}

export default App;
