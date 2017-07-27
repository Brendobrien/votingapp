import React from 'react';
import { StatusBar } from 'react-native';
import Expo from 'expo';

// assets
import images from '../../assets/images';

// components/Login
import Button from './Button';
import Disclaimer from './Disclaimer';
import Logo from './Logo';
import Title from './Title';

// helpers
import colors from '../../helpers/colors';

class Login extends React.Component {
  static navigationOptions = {
    gesturesEnabled: false,
    header: null,
  };

  render() {
    const { navigation } = this.props;
    return (
      <Expo.LinearGradient
        colors={[colors.red, colors.lightBlue]}
        start={[0, 0]}
        end={[0, 1]}
        style={{ flex: 1 }}
      >
        <Logo source={images.logo} size={[70, 62.9]} />
        <Title text={'Wizz'} />

        <Button
          color={colors.white}
          onPress={() => {
            navigation.navigate('Onboarding');
          }}
          padding={78}
          title="GET STARTED"
        />
        <Disclaimer />
        <StatusBar barStyle="light-content" hidden={false} />
      </Expo.LinearGradient>
    );
  }
}

export default Login;
