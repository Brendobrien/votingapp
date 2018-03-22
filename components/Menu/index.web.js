import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

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
    <View style={{ flex: 1 }}>
      <Row
        backgroundColor="orange"
        flex={buttonFlex}
        onPress={() => history.push('/all-polls')}
        text="All Polls"
      />
      {auth ? (
        rows.map(x => <Row {...x} key={x.text} />)
      ) : (
        <Row
          backgroundColor="blue"
          flex={buttonFlex}
          onPress={() => signInFacebook(Platform.OS)}
          text="Sign In Facebook"
        />
      )}
    </View>
  );
};

const mapStateToProps = state => ({
  auth: state.user.auth,
});

export default connect(mapStateToProps, {
  signInFacebook,
  signOutFacebook,
})(withRouter(Menu));
