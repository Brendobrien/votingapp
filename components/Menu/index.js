import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Favicon from 'react-favicon';

import Header from '../Header';
import Row from '../Row';
import getRows from './getRows';

import authStateChange from '../../state/firebase/authStateChange';
import getFirebaseUser from '../../state/firebase/getFirebaseUser';
import signInFacebook from '../../state/user/signInFacebook';
import signOutFacebook from '../../state/user/signOutFacebook';

const buttonFlex = 0.25;
class Menu extends React.Component {
  componentWillMount() {
    authStateChange(this.props.getFirebaseUser);
  }

  render() {
    const { auth } = this.props;

    let allPollsClick;
    if (Platform.OS === 'web') {
      const { history } = this.props;
      allPollsClick = () => history.push('/all-polls');
    } else {
      const { navigation } = this.props;
      allPollsClick = () => navigation.navigate('AllPolls');
    }

    const rows = getRows(this.props);

    return (
      <Header>
        {Platform.OS === 'web' ? (
          <Favicon url="https://content.invisioncic.com/d154966/monthly_2017_11/G.png.cd8f93bbaa6d71c9b62e8217a0f5737f.png" />
        ) : null}
        <Row
          backgroundColor="orange"
          flex={auth ? buttonFlex : buttonFlex * 2}
          onPress={allPollsClick}
          text="All Polls"
        />
        {rows.map(x => auth == x.auth && <Row {...x} key={x.text} />)}
      </Header>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.user.auth,
});

const MenuComponent = Platform.OS === 'web' ? withRouter(Menu) : Menu;

export default connect(mapStateToProps, {
  getFirebaseUser,
  signInFacebook,
  signOutFacebook,
})(MenuComponent);
