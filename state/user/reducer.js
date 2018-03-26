import {
  SIGN_IN_FACEBOOK_FAIL,
  SIGN_OUT_FACEBOOK_SUCCESS,
  SIGN_OUT_FACEBOOK_FAIL,
} from './types';

import {
  GET_FIREBASE_USER_FAIL,
  GET_FIREBASE_USER_SUCCESS,
  UPDATE_FIREBASE_USER_FAIL,
} from '../firebase/types';

const INIT_STATE = {
  auth: false,
};

export default (
  state = INIT_STATE,
  action,
) => {
  switch (action.type) {
    case GET_FIREBASE_USER_FAIL:
    case SIGN_IN_FACEBOOK_FAIL:
    case SIGN_OUT_FACEBOOK_FAIL:
    case UPDATE_FIREBASE_USER_FAIL:
      console.log(action.payload);
      return state;
    case GET_FIREBASE_USER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        auth: true,
      };
    case SIGN_OUT_FACEBOOK_SUCCESS:
      return { auth: false };
    default:
      return state;
  }
};
