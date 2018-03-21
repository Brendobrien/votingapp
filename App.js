import React from 'react';
import { Provider } from 'react-redux';

import Root from './components';
import store from './state/store';

class App extends React.Component {
  render() {
    return <Root />;
  }
}

export default App;
