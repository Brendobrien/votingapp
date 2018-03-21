import { SIGN_IN_FACEBOOK_SUCCESS } from './types';

const INIT_STATE = {
  auth: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_FACEBOOK_SUCCESS:
      return { ...state, auth: true };
    default:
      return state;
  }
};
