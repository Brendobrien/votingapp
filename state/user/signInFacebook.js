import firebase from 'firebase';
import { SIGN_IN_FACEBOOK_FAIL, SIGN_IN_FACEBOOK_SUCCESS } from './types';

const logout = async () => {
  await auth().signOut();
};

export default platform => async dispatch => {
  try {
    if (platform === 'web') {
      const auth = firebase.auth;
      const provider = new firebase.auth.FacebookAuthProvider();
      const result = await auth().signInWithPopup(provider);
      console.log(result);

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
  } catch (e) {
    dispatch({
      type: SIGN_IN_FACEBOOK_FAIL,
      payload: e,
    });
  }
};
