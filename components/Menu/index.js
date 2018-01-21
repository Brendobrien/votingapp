import React from 'react';
import { StyleSheet, View } from 'react-native';
import Row from '../Row';

const auth = true;
const buttonFlex = 0.25;
const rows = [
  {
    backgroundColor: 'green',
    flex: buttonFlex,
    text: 'My Polls',
    auth: true,
    onPress: () => console.log('my polls'),
  },
  {
    backgroundColor: 'red',
    flex: buttonFlex,
    text: 'New Poll',
    auth: true,
    onPress: () => console.log('new poll'),
  },
  {
    backgroundColor: 'blue',
    flex: buttonFlex,
    text: 'Sign Out',
    auth: true,
    onPress: () => console.log('sign out'),
  },
  {
    backgroundColor: 'blue',
    flex: buttonFlex,
    text: 'Sign In',
    auth: false,
    onPress: () => console.log('sign in'),
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
