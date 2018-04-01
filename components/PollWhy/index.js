import React from 'react';
import { Platform } from 'react-native';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

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
}) => {
  const { pollId, type } =
    Platform.OS === 'web'
      ? queryString.parse(
          location.search,
        )
      : nav.routes[nav.index].params;

  if (type && polls[pollId]) {
    const whys = polls[pollId][
      type
    ].split(',');
    // let whys = ['c', 'd', 'e', 'f', 'g'];
    // whys = [...whys, ...whys];
    // flex = votes;

    return (
      <Header>
        {whys.map((x, i) => (
          <Row
            backgroundColor={
              colors[i % 4]
            }
            rowStyle={
              i == 0 && {
                borderWidth: Math.max(
                  20 / whys.length,
                  10,
                ),
                borderColor: '#9F64C0',
              }
            }
            flex={0}
            key={i}
            minHeight={20}
            onPress={() =>
              // console.log({ type, why: i })
              dispatch(
                submitVote({
                  type,
                  why: i,
                }),
              )
            }
            text={x}
          />
        ))}
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
  ({ nav, polls }) => ({
    nav,
    polls,
  }),
)(PollWhyComp);
