import {
  GET_VOTES_FAIL,
  GET_VOTES_SUCCESS,
  SUBMIT_VOTE_FAIL,
  SUBMIT_VOTE_SUCCESS,
} from './types';

export default (
  state = {},
  { payload, type },
) => {
  switch (type) {
    case GET_VOTES_FAIL:
    case SUBMIT_VOTE_FAIL:
      console.log(payload);
      return state;
    case GET_VOTES_SUCCESS:
    case SUBMIT_VOTE_SUCCESS:
      return { ...state, ...payload };
    default:
      return state;
  }
};
