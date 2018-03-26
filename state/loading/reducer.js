import { LOADING } from './types';

const INIT_STATE = true;
export default (
  state = INIT_STATE,
  { payload, type },
) => {
  switch (type) {
    case LOADING:
      return payload;
    default:
      return state;
  }
};
