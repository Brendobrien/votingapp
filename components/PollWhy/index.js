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
import getVotes from '../../state/votes/getVotes';
import Header from '../Header';
import Row from '../Common/Row';
import submitVote from '../../state/votes/submitVote';

const colors = [
  'orange',
  'blue',
  'green',
  'red',
];
class PollWhy extends React.Component {
  componentWillMount() {
    this.props.dispatch(getVotes());
  }

  render() {
    const {
      dispatch,
      history,
      location,
      nav,
      polls,
      user: { auth, ip, uid },
      votes,
    } = this.props;
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
      let whys = {};
      let myVote = false;
      let allVotes = [];
      const { pollId, type } = params;
      if (votes[pollId]) {
        myVote =
          votes[pollId][
            auth ? uid : ip
          ];
        allVotes = Object.values(
          votes[pollId],
        ).filter(x => x.type === type);
      }
      polls[pollId][type]
        .split(',')
        .map(x => x.trim())
        .forEach(x => {
          whys[x] = {
            flex: 0,
            myVote:
              myVote &&
              myVote.type === type &&
              myVote.why === x,
            name: x,
          };
        });

      allVotes &&
        allVotes.forEach(x => {
          whys[x.why].flex++;
        });
      whys = Object.values(whys).sort(
        (a, b) => b.flex - a.flex,
      );

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
                        20 /
                          whys.length,
                        10,
                      ),
                      borderColor:
                        '#9F64C0',
                    }
                  }
                  flex={x.flex}
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
                        votes,
                      ),
                    )
                  }
                  text={`${x.name}${
                    x.flex
                      ? `\n${Math.round(
                          x.flex /
                            allVotes.length *
                            100,
                        )}%`
                      : ''
                  }`}
                />
              ))}
            </View>
            {auth ? (
              <Form params={params} />
            ) : null}
          </View>
        </Header>
      );
    }

    return <Header />;
  }
}

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
