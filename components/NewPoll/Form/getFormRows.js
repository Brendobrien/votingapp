import { Dimensions } from 'react-native';
import messages from '../messages';

export default (
  changeState,
  { language },
  state,
) => {
  let width = Math.min(
    Dimensions.get('window').width,
    700,
  );
  const colors = [
    'orange',
    'green',
    'red',
  ];
  const font = [19, 14, 13];

  return ['name', 'yes', 'no'].map(
    (x, i) => ({
      backgroundColor: colors[i],
      fontSize: width / 375 * font[i],
      initialValue: state[x],
      invalid: state[`${x}Invalid`],
      onChangeText: value =>
        changeState(x, value),
      placeholder:
        messages[`${x}Text`][language],
    }),
  );
};
