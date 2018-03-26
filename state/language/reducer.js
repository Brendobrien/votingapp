import { CHANGE_LANGUAGE } from './types';

const INIT_STATE = 'Spanish';
export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return action.payload;
    default:
      return state;
  }
};
