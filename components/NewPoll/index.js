import React from 'react';
import { connect } from 'react-redux';

import Form from './Form';
import Header from '../Header';
import Row from '../Common/Row';

const buttonFlex = 0.25;
const NewPoll = ({ auth }) => {
  return auth ? (
    <Header>
      <Form />
    </Header>
  ) : (
    <Header>
      <Row
        backgroundColor="red"
        flex={1}
        text="Only Authenticated Users Can Make Polls"
      />
    </Header>
  );
};

const mapStateToProps = ({ user: { auth } }) => ({ auth });

export default connect(mapStateToProps)(NewPoll);
