import React from 'react';
import { Provider } from 'react-redux';

import initFirebase from '../state/firebase/initFirebase';
import store from '../state/store';

import AppWithNavState from '../navigation/AppWithNavState';

class App extends React.Component {
  componentWillMount() {
    initFirebase();
  }

  render() {
    return (
      <Provider store={store}>
        <AppWithNavState />
      </Provider>
    );
  }
}

export default App;
