import { LOADING } from './types';

const INIT_STATE = true;
export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOADING:
      return action.payload;
    default:
      return state;
  }
};
