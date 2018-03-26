import { Platform } from 'react-native';
import { NavigationActions } from 'react-navigation';

export default (dispatch, history) =>
  Platform.OS === 'web'
    ? history.push('/info')
    : dispatch(NavigationActions.navigate({ routeName: 'Info' }));
