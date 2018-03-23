import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from '../Header';
import Row from '../Row';

import signInFacebook from '../../state/user/signInFacebook';
import signOutFacebook from '../../state/user/signOutFacebook';

const buttonFlex = 0.25;
const Menu = ({ auth, history, signInFacebook, signOutFacebook }) => {
  const rows = [
    {
      backgroundColor: 'green',
      flex: buttonFlex,
      onPress: () => console.log('my polls'),
      text: 'My Polls',
    },
    {
      backgroundColor: 'red',
      flex: buttonFlex,
      onPress: () => console.log('new poll'),
      text: 'New Poll',
    },
    {
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
        onPress={() => history.push('/all-polls')}
        text="All Polls"
      />
      {auth ? (
        rows.map(x => <Row {...x} key={x.text} />)
      ) : (
        <Row
          backgroundColor="blue"
          flex={buttonFlex * 2}
          onPress={() => signInFacebook(Platform.OS)}
          text="Sign In Facebook"
        />
      )}
    </Header>
  );
};

const mapStateToProps = state => ({
  auth: state.user.auth,
});

export default connect(mapStateToProps, {
  signInFacebook,
  signOutFacebook,
})(withRouter(Menu));
