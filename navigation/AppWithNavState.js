import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';

import AppNavigator from './AppNavigator';
import authStateChange from '../state/firebase/authStateChange';

class AppWithNavState extends React.Component {
  componentWillMount() {
    authStateChange(this.props.dispatch);
  }

  render() {
    const { dispatch, nav } = this.props;
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state: nav,
        })}
      />
    );
  }
}

const mapStateToProps = ({ nav }) => ({ nav });

export default connect(mapStateToProps)(AppWithNavState);
