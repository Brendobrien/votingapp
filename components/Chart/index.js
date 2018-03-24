import React from 'react';

import Header from '../Header';
import Row from '../Common/Row';

export default ({ percentNo = 0.5, percentSi = 0.5 }) => (
  <Header>
    <Row
      backgroundColor="green"
      flex={percentSi}
      text={`Si\n${percentSi * 100}%`}
      onPress={() => console.log('Si')}
    />
    <Row
      backgroundColor="red"
      flex={percentNo}
      text={`No\n${percentNo * 100}%`}
      onPress={() => console.log('No')}
    />
  </Header>
);
