import React from 'react';
import {
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Four04 from '../Four04';
import getSubText from './getSubText';
import Loading from '../Loading';
import MainHeader from './MainHeader';
import SubHeader from './SubHeader';

const Header = props => {
  const {
    children,
    loading,
    language,
  } = props;
  const subText = getSubText(props);

  return (
    <TouchableWithoutFeedback
      onPress={
        Platform.OS !== 'web'
          ? Keyboard.dismiss
          : null
      }
    >
      <View style={{ flex: 1 }}>
        <View>
          <MainHeader />
          <SubHeader {...subText} />
        </View>
        {loading ? (
          <Loading />
        ) : subText.text[language] ===
        '404' ? (
          <Four04 />
        ) : (
          children
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const mapStateToProps = ({
  language,
  loading,
  nav,
  polls,
}) => ({
  language,
  loading,
  nav,
  polls,
});
const HeaderComp =
  Platform.OS === 'web'
    ? withRouter(Header)
    : Header;

export default connect(mapStateToProps)(
  HeaderComp,
);
