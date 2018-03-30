import React from 'react';
import {
  Platform,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from '../Header';
import MyRow from './MyRow';
import goToRoute from '../../navigation/goToRoute';

const colors = [
  'orange',
  'green',
  'red',
  'blue',
];
const MyPolls = ({
  dispatch,
  history,
  polls,
}) => (
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

const MyPollsComp =
  Platform.OS === 'web'
    ? withRouter(MyPolls)
    : MyPolls;

const mapStateToProps = ({
  polls,
}) => ({ polls });

export default connect(mapStateToProps)(
  MyPollsComp,
);
