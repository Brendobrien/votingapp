import React from 'react';
import { Platform } from 'react-native';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import _ from 'lodash';

import Header from '../Header';
import Row from '../Common/Row';
import goHome from '../../navigation/goHome';
import goToRoute from '../../navigation/goToRoute';
import getVotes from '../../state/votes/getVotes';

class PollYesNo extends React.Component {
  componentWillMount() {
    this.props.dispatch(getVotes());
  }

  render() {
    const {
      dispatch,
      history,
      language,
      location,
      nav,
      user: { auth, ip, uid },
      votes,
    } = this.props;
    const params =
      Platform.OS === 'web'
        ? queryString.parse(
            location.search,
          )
        : nav.routes[nav.index].params;

    let total = 0;
    let myVote = false;
    const obj = {
      yes: {
        backgroundColor: 'green',
        flex: 0,
        text: {
          English: 'Yes',
          Spanish: 'Si',
        },
      },
      no: {
        backgroundColor: 'red',
        flex: 0,
        text: {
          English: 'No',
          Spanish: 'No',
        },
      },
    };
    if (
      params &&
      params.pollId &&
      votes[params.pollId]
    ) {
      Object.values(
        votes[params.pollId],
      ).forEach(x => {
        x.type === 'yes'
          ? obj.yes.flex++
          : obj.no.flex++;
        total++;
      });

      myVote =
        votes[params.pollId][
          auth ? uid : ip
        ];
    }

    return (
      <Header>
        {_.map(obj, (v, k) => (
          <Row
            backgroundColor={
              v.backgroundColor
            }
            flex={v.flex}
            key={k}
            minHeight={20}
            onPress={() =>
              goToRoute(
                dispatch,
                history,
                'PollWhy',
                params.pollId,
                k,
              )
            }
            rowStyle={
              myVote &&
              myVote.type === k && {
                borderWidth: 20,
                borderColor: '#9F64C0',
              }
            }
            text={`${v.text[language]}${
              v.flex
                ? `\n${Math.round(
                    v.flex /
                      total *
                      100,
                  )}%`
                : ''
            }`}
          />
        ))}
      </Header>
    );
  }
}

const PollYesNoComp =
  Platform.OS === 'web'
    ? withRouter(PollYesNo)
    : PollYesNo;
export default connect(
  ({ language, nav, user, votes }) => ({
    language,
    nav,
    user,
    votes,
  }),
)(PollYesNoComp);
