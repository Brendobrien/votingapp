import {
  SUBMIT_VOTE_FAIL,
  SUBMIT_VOTE_PENDING,
  SUBMIT_VOTE_SUCCESS,
} from './types';

export default (
  state = {},
  { payload, type },
) => {
  switch (type) {
    case SUBMIT_VOTE_FAIL:
      console.log(payload);
      return state;
    case SUBMIT_VOTE_SUCCESS:
      return { ...state, ...payload };
    default:
      return state;
  }
};
