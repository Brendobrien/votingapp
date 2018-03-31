import React from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';

import getPolls from '../../state/polls/getPolls';
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
    this.props.getPolls();
  }

  render() {
    const { polls } = this.props;

    return (
      <Header>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          {Object.keys(polls).map(
            (x, i) => (
              <Row
                backgroundColor={
                  colors[i % 4]
                }
                flex={1}
                key={i}
                text={polls[x].name}
                onPress={() =>
                  console.log(x)
                }
              />
            ),
          )}
        </ScrollView>
      </Header>
    );
  }
}

export default connect(
  ({ polls }) => ({ polls }),
  { getPolls },
)(AllPolls);
