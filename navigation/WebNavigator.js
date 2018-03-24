import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AllPolls from '../components/AllPolls';
import Chart from '../components/Chart';
import Menu from '../components/Menu';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Menu} />
      <Route path="/all-polls" component={AllPolls} />
      <Route path="/chart" component={Chart} />
    </Switch>
  </BrowserRouter>
);
