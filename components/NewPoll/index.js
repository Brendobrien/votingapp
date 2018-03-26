import React from 'react';
import { connect } from 'react-redux';

import Form from './Form';
import Header from '../Header';
import Row from '../Common/Row';
import messages from './messages';

const buttonFlex = 0.25;
const NewPoll = ({
  auth,
  language,
}) => {
  return auth ? (
    <Header>
      <Form />
    </Header>
  ) : (
    <Header>
      <Row
        backgroundColor="red"
        flex={1}
        text={
          messages.AuthError[language]
        }
      />
    </Header>
  );
};

const mapStateToProps = ({
  language,
  user: { auth },
}) => ({ auth, language });

export default connect(mapStateToProps)(
  NewPoll,
);
