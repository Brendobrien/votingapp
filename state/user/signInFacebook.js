import { SIGN_IN_FACEBOOK_FAIL, SIGN_IN_FACEBOOK_SUCCESS } from './types';

export default (platform, response) => async dispatch => {
  console.log(platform);
  if (platform === 'web') {
    console.log(response);

    dispatch({
      type: SIGN_IN_FACEBOOK_SUCCESS,
      payload: true,
    });
  } else {
    dispatch({
      type: SIGN_IN_FACEBOOK_SUCCESS,
      payload: true,
    });
  }
  // disptach({
  //   type: SIGN_IN_FACEBOOK_FAIL,
  // });
};
