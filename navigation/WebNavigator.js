import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AllPolls from '../components/AllPolls';
import Chart from '../components/Chart';
import Menu from '../components/Menu';
import NewPoll from '../components/NewPoll';

import authStateChange from '../state/firebase/authStateChange';

class WebNavigator extends React.Component {
  componentWillMount() {
    authStateChange(this.props.dispatch);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route path="/all-polls" component={AllPolls} />
          <Route path="/chart" component={Chart} />
          <Route path="/new-poll" component={NewPoll} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect()(WebNavigator);
