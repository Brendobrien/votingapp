import React from 'react';
import { View } from 'react-native';
import Row from '../Row';

const buttonFlex = 0.25;
export default props => (
  <View style={{ flex: 1 }}>
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
  </View>
);
