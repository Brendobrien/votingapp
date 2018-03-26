import React from 'react';
import { connect } from 'react-redux';

import Header from '../Header';
import Row from '../Common/Row';
import messages from './messages';
import changeLanguage from '../../state/language/changeLanguage';

const buttonFlex = 0.25;
const Info = ({
  changeLanguage,
  language,
}) => (
  <Header>
    <Row
      backgroundColor="orange"
      flex={buttonFlex}
      text={messages.Like[language]}
    />
    <Row
      backgroundColor="green"
      flex={buttonFlex}
      text={messages.Polls[language]}
    />
    <Row
      backgroundColor="red"
      flex={buttonFlex}
      text={messages.Why[language]}
    />
    <Row
      backgroundColor="blue"
      flex={buttonFlex}
      text={messages.Change[language]}
      onPress={() =>
        changeLanguage(
          language === 'English'
            ? 'Spanish'
            : 'English',
        )
      }
    />
  </Header>
);

const mapStateToProps = ({
  language,
}) => ({ language });
export default connect(
  mapStateToProps,
  {
    changeLanguage,
  },
)(Info);
