import React from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';

import Header from '../Header';
import MyRow from './MyRow';

const buttonFlex = 0.25;
const colors = [
  'orange',
  'green',
  'red',
  'blue',
];
const MyPolls = ({ polls }) => (
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
            flex={buttonFlex}
            key={i}
            minHeight={100}
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
  MyPolls,
);
