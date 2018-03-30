import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import Row from '../Common/Row';

export default connect(
  ({ language }) => ({ language }),
)(({ language }) => (
  <View
    style={{ flex: 1, padding: 50 }}
  >
    <Row
      backgroundColor="white"
      flex={1}
      text={
        language === 'English'
          ? "Sorry man, we can't find this page."
          : 'Disculpe hombre, no se encontró la página que solicitó.'
      }
    />
  </View>
));
