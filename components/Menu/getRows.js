const buttonFlex = 0.25;
export default ({ signInFacebook, signOutFacebook }) => [
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
    onPress: () => console.log('my polls'),
    text: 'My Polls',
  },
  {
    auth: true,
    backgroundColor: 'red',
    flex: buttonFlex,
    onPress: () => console.log('new poll'),
    text: 'New Poll',
  },
  {
    auth: true,
    backgroundColor: 'blue',
    flex: buttonFlex,
    onPress: signOutFacebook,
    text: 'Sign Out',
  },
];
