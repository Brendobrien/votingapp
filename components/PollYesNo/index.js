import React from 'react';
import { Platform } from 'react-native';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import Header from '../Header';
import Row from '../Common/Row';
import goHome from '../../navigation/goHome';
import goToRoute from '../../navigation/goToRoute';

const PollYesNo = ({
  dispatch,
  history,
  language,
  location,
  nav,
  votes,
}) => {
  const params =
    Platform.OS === 'web'
      ? queryString.parse(
          location.search,
        )
      : nav.routes[nav.index].params;

  let yes = 0;
  let no = 0;
  if (
    params &&
    params.pollId &&
    votes[params.pollId]
  ) {
    Object.values(
      votes[params.pollId],
    ).forEach(x => {
      x.type === 'yes' ? yes++ : no++;
    });
  }

  return (
    <Header>
      <Row
        backgroundColor="green"
        flex={yes}
        text={`${
          language === 'English'
            ? 'Yes'
            : 'Si'
        }${
          yes
            ? `\n${Math.round(
                yes / (yes + no) * 100,
              )}%`
            : ''
        }`}
        minHeight={20}
        onPress={() =>
          goToRoute(
            dispatch,
            history,
            'PollWhy',
            params.pollId,
            'yes',
          )
        }
      />
      <Row
        backgroundColor="red"
        flex={no}
        text={`No${
          no
            ? `\n${Math.round(
                no / (yes + no) * 100,
              )}%`
            : ''
        }`}
        minHeight={20}
        onPress={() =>
          goToRoute(
            dispatch,
            history,
            'PollWhy',
            params.pollId,
            'no',
          )
        }
      />
    </Header>
  );
};

const PollYesNoComp =
  Platform.OS === 'web'
    ? withRouter(PollYesNo)
    : PollYesNo;
export default connect(
  ({ language, nav, votes }) => ({
    language,
    nav,
    votes,
  }),
)(PollYesNoComp);
