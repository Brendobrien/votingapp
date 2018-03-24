import React from 'react';
import { Platform } from 'react-native';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Favicon from 'react-favicon';

import Header from '../Header';
import Row from '../Common/Row';
import getRows from './getRows';

import signInFacebook from '../../state/user/signInFacebook';
import signOutFacebook from '../../state/user/signOutFacebook';

const Menu = props => {
  const { auth } = props;
  const rows = getRows(props);

  return (
    <Header>
      {Platform.OS === 'web' ? (
        <Favicon url="https://content.invisioncic.com/d154966/monthly_2017_11/G.png.cd8f93bbaa6d71c9b62e8217a0f5737f.png" />
      ) : null}
      {rows.map(
        (x, i) => (i === 0 || auth == x.auth) && <Row {...x} key={x.text} />,
      )}
    </Header>
  );
};

const mapStateToProps = state => ({
  auth: state.user.auth,
});

const MenuComponent = Platform.OS === 'web' ? withRouter(Menu) : Menu;

export default connect(mapStateToProps, {
  signInFacebook,
  signOutFacebook,
})(MenuComponent);
