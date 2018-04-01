import {
  GET_POLLS_FAIL,
  GET_POLLS_SUCCESS,
  SUBMIT_REASON_FAIL,
  SUBMIT_POLL_FAIL,
  SUBMIT_POLL_SUCCESS,
  SUBMIT_REASON_SUCCESS,
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
    case GET_POLLS_FAIL:
    case SUBMIT_POLL_FAIL:
    case SUBMIT_REASON_FAIL:
      console.log(payload);
      return state;
    case GET_POLLS_SUCCESS:
    case SUBMIT_POLL_SUCCESS:
    case SUBMIT_REASON_SUCCESS:
      return { ...state, ...payload };
    default:
      return state;
  }
};
