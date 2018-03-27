import AppNavigator from '../../../navigation/AppNavigator';

const INIT_STATE = {
  index: 0,
  routes: [
    {
      index: 0,
      routeName: 'Menu',
      routeName: 'NewPoll',
      key: 'Init',
    },
  ],
};

export default (
  state = INIT_STATE,
  action,
) => {
  let nextState;
  if (AppNavigator) {
    nextState = AppNavigator.router.getStateForAction(
      action,
      state,
    );
  }

  return nextState || state;
};
