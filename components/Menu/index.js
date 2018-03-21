import React from 'react';
import { StyleSheet, View } from 'react-native';
import Row from '../Row';

const auth = false;
const buttonFlex = 0.25;
const rows = [
  {
    auth: false,
    backgroundColor: 'blue',
    flex: buttonFlex,
    onPress: () => console.log('sign in'),
    text: 'Sign In',
  },
  {
    auth: true,
    backgroundColor: 'green',
    flex: buttonFlex,
    onPress: () => console.log('my polls'),
    text: 'My Polls',
  },
  {
    auth: true,
    backgroundColor: 'red',
    flex: buttonFlex,
    onPress: () => console.log('new poll'),
    text: 'New Poll',
  },
  {
    auth: true,
    backgroundColor: 'blue',
    flex: buttonFlex,
    onPress: () => console.log('sign out'),
    text: 'Sign Out',
  },
];

export default () => (
  <View style={{ flex: 1 }}>
    <Row
      backgroundColor="orange"
      flex={buttonFlex}
      onPress={() => console.log('all polls')}
      text="All Polls"
    />
    {rows.map(x => auth == x.auth && <Row {...x} key={x.text} />)}
  </View>
);
