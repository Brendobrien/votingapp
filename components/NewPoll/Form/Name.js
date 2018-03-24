import React from 'react';
import { StyleSheet, View } from 'react-native';

import Input from '../../Common/Input';

import messages from '../../../helpers/messages';

export default ({ eventType, initialValue, invalid, onChangeText }) => (
  <View style={containerStyle}>
    <Input
      initialValue={initialValue}
      invalid={invalid}
      onChangeText={onChangeText}
      placeholder={messages.newPollName}
    />
  </View>
);

const { containerStyle } = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'orange',
    alignItems: 'center',
    flex: 0.25,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
