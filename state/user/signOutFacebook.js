import firebase from 'firebase';
import { SIGN_OUT_FACEBOOK_FAIL, SIGN_OUT_FACEBOOK_SUCCESS } from './types';

export default platform => async dispatch => {
  try {
    console.log(platform);
    if (platform === 'web') {
      const auth = firebase.auth;
      const result = await auth().signOut();
      console.log(result);

      dispatch({
        type: SIGN_OUT_FACEBOOK_SUCCESS,
        payload: false,
      });
    } else {
      dispatch({
        type: SIGN_OUT_FACEBOOK_SUCCESS,
        payload: false,
      });
    }
  } catch (e) {
    disptach({
      type: SIGN_OUT_FACEBOOK_FAIL,
    });
  }
};
