import firebase from 'firebase';
import { SIGN_IN_FACEBOOK_FAIL, SIGN_IN_FACEBOOK_SUCCESS } from '../types';

export default () => async dispatch => {
  try {
    const provider = new firebase.auth.FacebookAuthProvider();
    const { providerData } = await firebase.auth().signInWithPopup(provider);
    console.log(providerData[0]);

    dispatch({
      type: SIGN_IN_FACEBOOK_SUCCESS,
      payload: providerData[0],
    });
  } catch (e) {
    dispatch({
      type: SIGN_IN_FACEBOOK_FAIL,
      payload: e,
    });
  }
};
