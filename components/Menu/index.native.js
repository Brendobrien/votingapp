import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import Header from '../Header';
import Row from '../Row';

import signInFacebook from '../../state/user/signInFacebook';
import signOutFacebook from '../../state/user/signOutFacebook';

const buttonFlex = 0.25;

const Menu = ({ auth, navigation, signInFacebook, signOutFacebook }) => {
  const rows = [
    {
      auth: false,
      backgroundColor: 'blue',
      flex: buttonFlex * 2,
      onPress: () => signInFacebook('native'),
      text: 'Sign In Facebook',
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
      onPress: () => signOutFacebook(),
      text: 'Sign Out',
    },
  ];

  return (
    <Header>
      <Row
        backgroundColor="orange"
        flex={auth ? buttonFlex : buttonFlex * 2}
        onPress={() => navigation.navigate('AllPolls')}
        text="All Polls"
      />
      {rows.map(x => auth == x.auth && <Row {...x} key={x.text} />)}
    </Header>
  );
};

const mapStateToProps = state => ({
  auth: state.user.auth,
});

export default connect(mapStateToProps, {
  signInFacebook,
  signOutFacebook,
})(Menu);
