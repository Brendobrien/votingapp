import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import Row from '../Row';
import signInFacebook from '../../state/user/signInFacebook';
import signOutFacebook from '../../state/user/signOutFacebook';

const buttonFlex = 0.25;

const Menu = ({ auth, signInFacebook, signOutFacebook }) => {
  const rows = [
    {
      auth: false,
      backgroundColor: 'blue',
      flex: buttonFlex,
      onPress: () => signInFacebook('native'),
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
      onPress: () => signOutFacebook(),
      text: 'Sign Out',
    },
  ];

  return (
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
};

const mapStateToProps = state => ({
  auth: state.user.auth,
});

export default connect(mapStateToProps, {
  signInFacebook,
  signOutFacebook,
})(Menu);
