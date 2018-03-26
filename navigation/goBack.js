import { Platform } from 'react-native';
import { NavigationActions } from 'react-navigation';

export default (dispatch, history) =>
  Platform.OS === 'web'
    ? history.goBack()
    : dispatch(
        NavigationActions.back(),
      );
