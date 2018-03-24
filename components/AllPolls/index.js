import React from 'react';

import Header from '../Header';
import Row from '../Common/Row';

const buttonFlex = 0.25;
export default props => (
  <Header>
    <Row
      backgroundColor="red"
      flex={buttonFlex}
      text="Poll One"
      onPress={() => console.log('Si')}
    />
    <Row
      backgroundColor="orange"
      flex={buttonFlex}
      text="Poll Two"
      onPress={() => console.log('No')}
    />
  </Header>
);
