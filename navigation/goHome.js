import { Platform } from 'react-native';
import { NavigationActions } from 'react-navigation';

export default (dispatch, history) =>
  Platform.OS === 'web'
    ? history.push('/')
    : dispatch(
        NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Menu' })],
        }),
      );
