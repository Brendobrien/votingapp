import firebase from 'firebase';
import { SIGN_OUT_FACEBOOK_FAIL, SIGN_OUT_FACEBOOK_SUCCESS } from './types';

export default platform => async dispatch => {
  try {
    await firebase.auth().signOut();

    dispatch({
      type: SIGN_OUT_FACEBOOK_SUCCESS,
      payload: false,
    });
  } catch (e) {
    disptach({
      type: SIGN_OUT_FACEBOOK_FAIL,
    });
  }
};
