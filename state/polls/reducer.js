import {
  SUBMIT_POLL_FAIL,
  SUBMIT_POLL_SUCCESS,
} from './types';
import { GET_FIREBASE_USER_SUCCESS } from '../firebase/types';

const INIT_STATE = {};
export default (
  state = INIT_STATE,
  { payload, type },
) => {
  switch (type) {
    case GET_FIREBASE_USER_SUCCESS:
      return payload.polls || state;
    case SUBMIT_POLL_FAIL:
      console.log(payload);
      return state;
    case SUBMIT_POLL_SUCCESS:
      return { ...state, ...payload };
    default:
      return state;
  }
};
