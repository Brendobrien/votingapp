import { Platform } from 'react-native';
import messages from './messages';

const buttonFlex = 0.25;
export default ({
  auth,
  history,
  language,
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
      text: messages.AllPolls[language],
    },
    {
      auth: false,
      backgroundColor: 'blue',
      flex: buttonFlex * 2,
      onPress: signInFacebook,
      text: messages.SignIn[language],
    },
    {
      auth: true,
      backgroundColor: 'green',
      flex: buttonFlex,
      onPress: () =>
        console.log('my polls'),
      text: messages.MyPolls[language],
    },
    {
      auth: true,
      backgroundColor: 'red',
      flex: buttonFlex,
      onPress: newPollClick,
      text: messages.NewPoll[language],
    },
    {
      auth: true,
      backgroundColor: 'blue',
      flex: buttonFlex,
      onPress: signOutFacebook,
      text: messages.SignOut[language],
    },
  ];
};
