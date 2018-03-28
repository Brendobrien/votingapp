import { Platform } from 'react-native';
import messages from './messages';

import signInFacebook from '../../state/user/signInFacebook';
import signOutFacebook from '../../state/user/signOutFacebook';

const buttonFlex = 0.25;
export default ({
  auth,
  dispatch,
  history,
  language,
  navigation,
}) => {
  if (Platform.OS === 'web') {
    allPollsClick = () =>
      history.push('/all-polls');
    newPollClick = () =>
      history.push('/new-poll');
    myPollsClick = () =>
      history.push('/my-polls');
  } else {
    allPollsClick = () =>
      navigation.navigate('AllPolls');
    newPollClick = () =>
      navigation.navigate('NewPoll');
    myPollsClick = () =>
      navigation.navigate('MyPolls');
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
      onPress: () =>
        dispatch(
          signInFacebook(
            dispatch,
            history,
          ),
        ),
      text: messages.SignIn[language],
    },
    {
      auth: true,
      backgroundColor: 'green',
      flex: buttonFlex,
      onPress: myPollsClick,
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
      onPress: () =>
        dispatch(signOutFacebook()),
      text: messages.SignOut[language],
    },
  ];
};
