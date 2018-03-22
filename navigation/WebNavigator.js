import React from 'react';
import { View } from 'react-native';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AllPolls from '../components/AllPolls';
import Banner from '../components/Banner';
import Chart from '../components/Chart';
import Menu from '../components/Menu';
const WebNavigator = () => (
  <BrowserRouter>
    <View style={{ flex: 1 }}>
      <Banner />
      <Switch>
        <Route exact path="/" component={Menu} />
        <Route path="/all-polls" component={AllPolls} />
        <Route path="/chart" component={Chart} />
      </Switch>
    </View>
  </BrowserRouter>
);
export default WebNavigator;
