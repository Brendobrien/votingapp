import {
  SUBMIT_POLL_FAIL,
  SUBMIT_POLL_SUCCESS,
} from './types';
import { GET_FIREBASE_USER_SUCCESS } from '../firebase/types';

// const INIT_STATE = {};
const INIT_STATE = {
  a: {
    name: 'a',
    yes: 'a',
    no: 'a',
  },
  b: {
    name: 'b',
    yes: 'b',
    no: 'b',
  },
  c: {
    name: 'a',
    yes: 'a',
    no: 'a',
  },
  d: {
    name: 'b',
    yes: 'b',
    no: 'b',
  },
  aa: {
    name: 'a',
    yes: 'a',
    no: 'a',
  },
  ab: {
    name: 'b',
    yes: 'b',
    no: 'b',
  },
  ac: {
    name: 'a',
    yes: 'a',
    no: 'a',
  },
  ad: {
    name: 'b',
    yes: 'b',
    no: 'b',
  },
  ca: {
    name: 'a',
    yes: 'a',
    no: 'a',
  },
  cb: {
    name: 'b',
    yes: 'b',
    no: 'b',
  },
  cc: {
    name: 'a',
    yes: 'a',
    no: 'a',
  },
  cd: {
    name: 'b',
    yes: 'b',
    no: 'b',
  },
  da: {
    name: 'a',
    yes: 'a',
    no: 'a',
  },
  db: {
    name: 'b',
    yes: 'b',
    no: 'b',
  },
  dc: {
    name: 'a',
    yes: 'a',
    no: 'a',
  },
  dd: {
    name: 'b',
    yes: 'b',
    no: 'b',
  },
  aaa: {
    name: 'a',
    yes: 'a',
    no: 'a',
  },
  aab: {
    name: 'b',
    yes: 'b',
    no: 'b',
  },
  aac: {
    name: 'a',
    yes: 'a',
    no: 'a',
  },
  aad: {
    name: 'b',
    yes: 'b',
    no: 'b',
  },
  aba: {
    name: 'a',
    yes: 'a',
    no: 'a',
  },
  abb: {
    name: 'b',
    yes: 'b',
    no: 'b',
  },
  abc: {
    name: 'a',
    yes: 'a',
    no: 'a',
  },
  abd: {
    name: 'b',
    yes: 'b',
    no: 'b',
  },
  aca: {
    name: 'a',
    yes: 'a',
    no: 'a',
  },
  acb: {
    name: 'b',
    yes: 'b',
    no: 'b',
  },
  acc: {
    name: 'a',
    yes: 'a',
    no: 'a',
  },
  acd: {
    name: 'b',
    yes: 'b',
    no: 'b',
  },
};
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
