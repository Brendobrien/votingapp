import React from 'react';
import { connect } from 'react-redux';

import Row from '../Common/Row';

export default connect(
  ({ language }) => ({ language }),
)(({ language }) => (
  <Row
    backgroundColor="white"
    flex={1}
    text={
      language === 'English'
        ? 'Loading...'
        : 'Cargando...'
    }
  />
));
