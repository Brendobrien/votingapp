import React from 'react';

import Row from '../../Row';

export default () => (
  <Row
    backgroundColor="green"
    flex={1}
    text="Name"
    onPress={() => console.log('Si')}
  />
);
