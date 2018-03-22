import {
  SIGN_IN_FACEBOOK_SUCCESS,
  SIGN_IN_FACEBOOK_FAIL,
  SIGN_OUT_FACEBOOK_SUCCESS,
} from './types';

const INIT_STATE = {
  auth: false,
};

export default (state = INIT_STATE, action) => {
  console.log(action.type);
  switch (action.type) {
    case SIGN_IN_FACEBOOK_FAIL: {
      console.log(action.payload);
      return state;
    }
    case SIGN_IN_FACEBOOK_SUCCESS:
      return { ...state, auth: action.payload };
    case SIGN_OUT_FACEBOOK_SUCCESS:
      return { ...state, auth: action.payload };
    default:
      return state;
  }
};
