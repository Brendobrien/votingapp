import {
  GET_USER_IP_FAIL,
  GET_USER_IP_SUCCESS,
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
  { payload, type },
) => {
  switch (type) {
    case GET_USER_IP_FAIL:
    case GET_FIREBASE_USER_FAIL:
    case SIGN_IN_FACEBOOK_FAIL:
    case SIGN_OUT_FACEBOOK_FAIL:
    case UPDATE_FIREBASE_USER_FAIL:
      console.log(payload);
      return state;
    case GET_USER_IP_SUCCESS:
      return {
        ...state,
        ip: payload,
      };
    case GET_FIREBASE_USER_SUCCESS:
      return {
        ...payload.user,
        auth: true,
      };
    case SIGN_OUT_FACEBOOK_SUCCESS:
      return {
        ip: state.ip,
        auth: false,
      };
    default:
      return state;
  }
};
