import {
  CHANGE_LANGUAGE_FAIL,
  CHANGE_LANGUAGE_SUCCESS,
} from './types';
import { GET_FIREBASE_USER_SUCCESS } from '../firebase/types';

const INIT_STATE = 'Spanish';
export default (
  state = INIT_STATE,
  { payload, type },
) => {
  switch (type) {
    case CHANGE_LANGUAGE_FAIL:
      console.log(payload);
      return state;
    case CHANGE_LANGUAGE_SUCCESS:
      return payload;
    case GET_FIREBASE_USER_SUCCESS:
      return payload.language || state;
    default:
      return state;
  }
};
