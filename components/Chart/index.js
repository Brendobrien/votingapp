import React from 'react';
import { View } from 'react-native';
import Row from '../Row';

export default ({ percentNo = 0.5, percentSi = 0.5 }) => (
  <View style={{ flex: 1 }}>
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
  </View>
);
