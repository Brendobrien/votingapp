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
      text={messages.Line1[language]}
    />
    <Row
      backgroundColor="green"
      flex={buttonFlex}
      text={messages.Line2[language]}
    />
    <Row
      backgroundColor="red"
      flex={buttonFlex}
      text={messages.Line3[language]}
    />
    <Row
      backgroundColor="blue"
      flex={buttonFlex}
      text={messages.Line4[language]}
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
