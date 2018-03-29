import { Platform } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { urls } from './mapRoutes';

export default (
  dispatch,
  history,
  routeName,
  pollId = '',
  type = '',
) =>
  Platform.OS === 'web'
    ? history.push(
        `${urls[routeName]}${pollId &&
          `?pollId=${pollId}`}${type &&
          `&type=${type}`}`,
      )
    : dispatch(
        NavigationActions.navigate({
          routeName,
          params: pollId
            ? {
                pollId,
                type,
              }
            : null,
        }),
      );
