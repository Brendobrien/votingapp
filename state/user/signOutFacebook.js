import firebase from 'firebase';
import {
  SIGN_OUT_FACEBOOK_FAIL,
  SIGN_OUT_FACEBOOK_PENDING,
  SIGN_OUT_FACEBOOK_SUCCESS,
} from './types';

export default platform => async dispatch => {
  dispatch({ type: SIGN_OUT_FACEBOOK_PENDING });

  try {
    await firebase.auth().signOut();

    dispatch({
      type: SIGN_OUT_FACEBOOK_SUCCESS,
      payload: false,
    });
  } catch (e) {
    dispatch({
      type: SIGN_OUT_FACEBOOK_FAIL,
    });
  }
};
