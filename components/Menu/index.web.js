import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

import Row from '../Row';
import signInFacebook from '../../state/user/signInFacebook';
import signOutFacebook from '../../state/user/signOutFacebook';

const buttonFlex = 0.25;

const Menu = ({ auth, signInFacebook, signOutFacebook }) => {
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
        onPress={() => console.log('all polls')}
        text="All Polls"
      />
      {auth ? (
        rows.map(x => <Row {...x} key={x.text} />)
      ) : (
        <FacebookLogin
          appId="1292315704246391"
          fields="name,email,picture"
          callback={response => signInFacebook('web', response)}
          render={renderProps => (
            <Row
              backgroundColor="blue"
              flex={buttonFlex}
              onPress={renderProps.onClick}
              text="Sign In"
            />
          )}
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
})(Menu);
