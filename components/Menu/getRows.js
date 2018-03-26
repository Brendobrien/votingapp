import { Platform } from 'react-native';

const buttonFlex = 0.25;
export default ({
  auth,
  history,
  navigation,
  signInFacebook,
  signOutFacebook,
}) => {
  let allPollsClick;
  if (Platform.OS === 'web') {
    allPollsClick = () =>
      history.push('/all-polls');
    newPollClick = () =>
      history.push('/new-poll');
  } else {
    allPollsClick = () =>
      navigation.navigate('AllPolls');
    newPollClick = () =>
      navigation.navigate('NewPoll');
  }

  return [
    {
      backgroundColor: 'orange',
      flex: auth
        ? buttonFlex
        : buttonFlex * 2,
      onPress: allPollsClick,
      text: 'Todos Personas',
    },
    {
      auth: false,
      backgroundColor: 'blue',
      flex: buttonFlex * 2,
      onPress: signInFacebook,
      text: 'Sign In Facebook',
    },
    {
      auth: true,
      backgroundColor: 'green',
      flex: buttonFlex,
      onPress: () =>
        console.log('my polls'),
      text: 'Mis Personas',
    },
    {
      auth: true,
      backgroundColor: 'red',
      flex: buttonFlex,
      onPress: newPollClick,
      text: 'Nueva Persona',
    },
    {
      auth: true,
      backgroundColor: 'blue',
      flex: buttonFlex,
      onPress: signOutFacebook,
      text: 'Sign Out',
    },
  ];
};
