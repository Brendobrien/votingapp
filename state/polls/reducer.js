import {
  SUBMIT_POLL_FAIL,
  SUBMIT_POLL_SUCCESS,
} from './types;';

export default (
  state = {},
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
