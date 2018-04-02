import firebase from 'firebase';
import React from 'react';
import {
  Platform,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';

import getPolls from '../../state/polls/getPolls';
import goToRoute from '../../navigation/goToRoute';
import Header from '../Header';
import MyRow from './MyRow';
import Row from '../Common/Row';

const colors = [
  'orange',
  'green',
  'red',
  'blue',
];
const MyPolls = ({
  dispatch,
  history,
  language,
  polls,
}) => {
  let myPolls = _.pickBy(
    polls,
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
        {_.size(myPolls) ? (
          Object.keys(myPolls).map(
            (x, i) => (
              <MyRow
                backgroundColor={
                  colors[i % 4]
                }
                key={x}
                pollId={x}
                text={myPolls[x].name}
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
        ) : (
          <Row
            backgroundColor="red"
            flex={1}
            text={
              language === 'English'
                ? 'New Poll'
                : 'Nueva Encuesta'
            }
            onPress={() =>
              goToRoute(
                dispatch,
                history,
                'NewPoll',
              )
            }
          />
        )}
      </ScrollView>
    </Header>
  );
};

const MyPollsComp =
  Platform.OS === 'web'
    ? withRouter(MyPolls)
    : MyPolls;

export default connect(
  ({ language, polls }) => ({
    language,
    polls,
  }),
)(MyPollsComp);
