import AppNavigator from '../../navigation/AppNavigator';
import loginState from './loginState';

export default (state = loginState, action) => {
  let nextState;
  if (AppNavigator) {
    nextState = AppNavigator.router.getStateForAction(action, state);
  }

  return nextState || state;
};
