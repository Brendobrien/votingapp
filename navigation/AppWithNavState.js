import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';

// navigation
import AppNavigator from './AppNavigator';

const AppWithNavState = ({ dispatch, nav }) => (
  <AppNavigator
    navigation={addNavigationHelpers({
      dispatch,
      state: nav,
    })}
  />
);

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavState);
