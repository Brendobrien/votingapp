import { SIGN_IN_FACEBOOK_FAIL, SIGN_IN_FACEBOOK_SUCCESS } from './types';

const signIn = async () => true;

export default () => async dispatch => {
  const auth = await signIn();
  auth
    ? dispatch({
        type: SIGN_IN_FACEBOOK_SUCCESS,
      })
    : disptach({
        type: SIGN_IN_FACEBOOK_FAIL,
      });
};
