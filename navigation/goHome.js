import { NavigationActions } from 'react-navigation';

export default () => dispatch =>
  dispatch(
    NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Menu' })],
    }),
  );
