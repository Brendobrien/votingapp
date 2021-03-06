import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Input from '../../Common/Input';

export default ({
  backgroundColor,
  fontSize = 15,
  initialValue,
  invalid,
  onChangeText,
  placeholder,
}) => (
  <View style={{ flex: 1 }}>
    <View
      style={[
        containerStyle,
        { backgroundColor },
      ]}
    >
      <Input
        fontSize={fontSize}
        initialValue={initialValue}
        invalid={invalid}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
  </View>
);

const {
  containerStyle,
} = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'orange',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
