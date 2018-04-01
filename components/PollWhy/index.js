import React from 'react';
import {
  Platform,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import _ from 'lodash';

import Form from './Form';
import Header from '../Header';
import Row from '../Common/Row';
import submitVote from '../../state/votes/submitVote';

const colors = [
  'orange',
  'blue',
  'green',
  'red',
];
const PollWhy = ({
  dispatch,
  history,
  location,
  nav,
  polls,
  user: { auth, ip, uid },
  votes,
}) => {
  const params =
    Platform.OS === 'web'
      ? queryString.parse(
          location.search,
        )
      : nav.routes[nav.index].params;

  if (
    params &&
    params.type &&
    params.pollId &&
    polls[params.pollId] &&
    polls[params.pollId][params.type]
  ) {
    const { pollId, type } = params;
    const myVote =
      votes[pollId][auth ? uid : ip];
    console.log(polls[pollId][type]);
    console.log(myVote);
    let whys = polls[pollId][type]
      .split(',')
      .map((x, i) => ({
        flex: 0,
        myVote: myVote.why === x.trim(),
        name: x.trim(),
      }));

    return (
      <Header>
        <View
          style={{
            flex: 1,
            justifyContent:
              'space-between',
          }}
        >
          <View style={{ flex: 1 }}>
            {whys.map((x, i) => (
              <Row
                backgroundColor={
                  colors[i % 4]
                }
                rowStyle={
                  x.myVote && {
                    borderWidth: Math.max(
                      20 / whys.length,
                      10,
                    ),
                    borderColor:
                      '#9F64C0',
                  }
                }
                // flex={x.flex}
                flex={0}
                key={i}
                minHeight={20}
                onPress={() =>
                  dispatch(
                    submitVote(
                      ip,
                      pollId,
                      {
                        type,
                        why: x.name,
                      },
                    ),
                  )
                }
                text={`${x.name}${
                  x.flex
                    ? `\n${x.flex /
                        allVotes.length *
                        100}%`
                    : ''
                }`}
              />
            ))}
          </View>
          <Form params={params} />
        </View>
      </Header>
    );
  }

  return <Header />;
};

const PollWhyComp =
  Platform.OS === 'web'
    ? withRouter(PollWhy)
    : PollWhy;
export default connect(
  ({ nav, polls, user, votes }) => ({
    nav,
    polls,
    user,
    votes,
  }),
)(PollWhyComp);
