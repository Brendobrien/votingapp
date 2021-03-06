import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Input from '../../Common/Input';

export default ({
  backgroundColor,
  fontSize = 12,
  initialValue,
  invalid,
  onChangeText,
  placeholder,
}) => (
  <View
    style={[
      containerStyle,
      { backgroundColor },
    ]}
  >
    <Input
      containerStyle={{
        paddingHorizontal: 0,
        height: 50,
      }}
      fontSize={fontSize}
      initialValue={initialValue}
      invalid={invalid}
      onChangeText={onChangeText}
      placeholder={placeholder}
    />
  </View>
);

const {
  containerStyle,
} = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'orange',
    alignItems: 'center',
    flex: 0.7,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },
});
