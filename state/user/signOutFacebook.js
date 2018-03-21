import { SIGN_OUT_FACEBOOK_FAIL, SIGN_OUT_FACEBOOK_SUCCESS } from './types';

export default () => async dispatch => {
  dispatch({
    type: SIGN_OUT_FACEBOOK_SUCCESS,
    payload: false,
  });

  // disptach({
  //   type: SIGN_OUT_FACEBOOK_FAIL,
  // });
};
