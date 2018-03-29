import { Platform } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { urls } from './mapRoutes';

export default (
  dispatch,
  history,
  routeName,
) =>
  Platform.OS === 'web'
    ? history.push(urls[routeName])
    : dispatch(
        NavigationActions.navigate({
          routeName,
        }),
      );
