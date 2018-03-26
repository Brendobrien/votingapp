import { CHANGE_LANGUAGE } from './types';

export default language => ({
  type: CHANGE_LANGUAGE,
  payload: language,
});
