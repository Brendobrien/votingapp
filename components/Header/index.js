import React from 'react';
import {
  Platform,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import Loading from '../Loading';
import SubHeader from './SubHeader';
import MainHeader from './MainHeader';

const Header = props => {
  const { children, loading } = props;
  const color = '#9F64C0';
  const screenText = 'Menu';

  return (
    <View style={{ flex: 1 }}>
      <View>
        <MainHeader />
        <SubHeader />
      </View>
      {loading ? <Loading /> : children}
    </View>
  );
};

const mapStateToProps = ({
  loading,
}) => ({ loading });

export default connect(mapStateToProps)(
  Header,
);
