import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

const auth = false;
const percentFace = 0.25;

export default () => (
  <View style={{ flex: 1 }}>
    {renderRow('orange', percentFace, 'All Polls')}
    {auth
      ? [
          ['green', percentFace, 'My Polls'],
          ['red', percentFace, 'New Poll'],
          ['blue', percentFace, 'Sign Out'],
        ].map(x => renderRow(...x))
      : renderRow('blue', percentFace, 'Sign In')}
    <View
      style={[buttonStyle, { backgroundColor: 'white', flex: auth ? 0 : 0.5 }]}
    />
  </View>
);

const renderRow = (backgroundColor, flex, text) => (
  <View style={[buttonStyle, { backgroundColor, flex }]} key={text}>
    <TouchableOpacity onPress={() => console.log(text)}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  </View>
);

const { buttonStyle, textStyle } = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 30,
    textAlign: 'center',
  },
});
