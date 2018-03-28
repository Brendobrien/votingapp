import {
  SUBMIT_POLL_FAIL,
  SUBMIT_POLL_SUCCESS,
} from './types';

const INIT_STATE = {
  x9iq1a0F3GOUjz5VpmPlmCnKAXV2_0: {
    name: 'ye',
    yes: 'a, b, c',
    no: 'e, d, f',
  },
};
export default (
  state = INIT_STATE,
  { payload, type },
) => {
  switch (type) {
    case SUBMIT_POLL_FAIL:
      console.log(payload);
      return state;
    case SUBMIT_POLL_SUCCESS:
      return { ...state, ...payload };
    default:
      return state;
  }
};
