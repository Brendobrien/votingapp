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
  location,
  nav,
  percentNo = 0.5,
  percentSi = 0.5,
}) => {
  const params =
    Platform.OS === 'web'
      ? queryString.parse(
          location.search,
        )
      : nav.routes[nav.index].params;

  return (
    <Header>
      <Row
        backgroundColor="green"
        flex={percentSi}
        text={`Yes\n${percentSi *
          100}%`}
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
        flex={percentNo}
        text={`No\n${percentNo * 100}%`}
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
export default connect(({ nav }) => ({
  nav,
}))(PollYesNoComp);
