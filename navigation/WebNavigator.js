import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AllPolls from '../components/AllPolls';
import Chart from '../components/Chart';
import Loading from '../components/Loading';
import Menu from '../components/Menu';

const WebNavigator = ({ loading }) => (
  <BrowserRouter>
    {loading ? (
      <Loading />
    ) : (
      <Switch>
        <Route exact path="/" component={Menu} />
        <Route path="/all-polls" component={AllPolls} />
        <Route path="/chart" component={Chart} />
      </Switch>
    )}
  </BrowserRouter>
);

const mapStateToProps = ({ loading }) => ({ loading });

export default connect(mapStateToProps)(WebNavigator);
