import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import AllPolls from '../components/AllPolls';
import Four04 from '../components/Four04';
import Info from '../components/Info';
import Menu from '../components/Menu';
import MyPolls from '../components/MyPolls';
import NewPoll from '../components/NewPoll';
import PollWhy from '../components/PollWhy';
import PollYesNo from '../components/PollYesNo';

import authStateChange from '../state/firebase/authStateChange';

class WebNavigator extends React.Component {
  componentWillMount() {
    authStateChange(
      this.props.dispatch,
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={Menu}
          />
          <Route
            path="/all-polls"
            component={AllPolls}
          />
          <Route
            path="/info"
            component={Info}
          />
          <Route
            path="/my-polls"
            component={MyPolls}
          />
          <Route
            path="/new-poll"
            component={NewPoll}
          />
          <Route
            path="/poll-yes-no"
            component={PollYesNo}
          />
          <Route
            path="/poll-why"
            component={PollWhy}
          />
          <Route component={Four04} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect()(WebNavigator);
