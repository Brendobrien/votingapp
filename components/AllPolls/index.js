import React from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';

import Header from '../Header';
import Row from '../Common/Row';

const colors = [
  'orange',
  'green',
  'red',
  'blue',
];
const AllPolls = ({ polls }) => (
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

const mapStateToProps = ({
  polls,
}) => ({ polls });

export default connect(mapStateToProps)(
  AllPolls,
);
