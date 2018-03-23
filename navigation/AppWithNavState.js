import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';

import Loading from '../components/Loading';
import AppNavigator from './AppNavigator';

const AppWithNavState = ({ dispatch, loading, nav }) =>
  loading ? (
    <Loading />
  ) : (
    <AppNavigator
      navigation={addNavigationHelpers({
        dispatch,
        state: nav,
      })}
    />
  );

const mapStateToProps = ({ loading, nav }) => ({ loading, nav });

export default connect(mapStateToProps)(AppWithNavState);
