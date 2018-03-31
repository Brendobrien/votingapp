import firebase from 'firebase';
import React from 'react';
import {
  Platform,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';

import Header from '../Header';
import MyRow from './MyRow';
import getPolls from '../../state/polls/getPolls';
import goToRoute from '../../navigation/goToRoute';

const colors = [
  'orange',
  'green',
  'red',
  'blue',
];
class MyPolls extends React.Component {
  componentWillMount() {
    this.props.getPolls();
  }

  render() {
    const {
      dispatch,
      history,
    } = this.props;
    let polls = _.pickBy(
      this.props.polls,
      (v, key) => {
        const {
          currentUser: { uid },
        } = firebase.auth();
        return (
          uid &&
          uid === key.split('___')[0]
        );
      },
    );

    return (
      <Header>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          {Object.keys(polls).map(
            (x, i) => (
              <MyRow
                backgroundColor={
                  colors[i % 4]
                }
                key={x}
                pollId={x}
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
          )}
        </ScrollView>
      </Header>
    );
  }
}

const MyPollsComp =
  Platform.OS === 'web'
    ? withRouter(MyPolls)
    : MyPolls;

export default connect(
  ({ polls }) => ({ polls }),
  { getPolls },
)(MyPollsComp);
