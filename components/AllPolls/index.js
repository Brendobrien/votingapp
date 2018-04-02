import React from 'react';
import {
  Platform,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import getPolls from '../../state/polls/getPolls';
import goToRoute from '../../navigation/goToRoute';
import Header from '../Header';
import Row from '../Common/Row';

const colors = [
  'orange',
  'green',
  'red',
  'blue',
];
class AllPolls extends React.Component {
  componentWillMount() {
    this.props.dispatch(getPolls());
  }

  render() {
    const {
      dispatch,
      history,
      polls,
    } = this.props;

    return (
      <Header>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          {polls
            ? Object.keys(polls).map(
                (x, i) => (
                  <Row
                    backgroundColor={
                      colors[i % 4]
                    }
                    flex={1}
                    key={i}
                    text={polls[x].name}
                    onPress={() =>
                      goToRoute(
                        dispatch,
                        history,
                        'PollYesNo',
                        x,
                      )
                    }
                  />
                ),
              )
            : null}
        </ScrollView>
      </Header>
    );
  }
}

const AllPollsComp =
  Platform.OS === 'web'
    ? withRouter(AllPolls)
    : AllPolls;

export default connect(({ polls }) => ({
  polls,
}))(AllPollsComp);
