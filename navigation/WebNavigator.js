import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AllPolls from '../components/AllPolls';
import Chart from '../components/Chart';
import Menu from '../components/Menu';

const WebNavigator = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Menu} />
      <Route path="/all-polls" component={AllPolls} />
      <Route path="/chart" component={Chart} />
    </Switch>
  </BrowserRouter>
);
export default WebNavigator;
