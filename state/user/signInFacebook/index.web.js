import firebase from 'firebase';

import { LOADING } from '../../loading/types';
import {
  SIGN_IN_FACEBOOK_FAIL,
  SIGN_IN_FACEBOOK_PENDING,
  SIGN_IN_FACEBOOK_SUCCESS,
} from '../types';

export default () => async dispatch => {
  dispatch({ type: LOADING, payload: true });
  dispatch({ type: SIGN_IN_FACEBOOK_PENDING });

  try {
    const provider = new firebase.auth.FacebookAuthProvider();
    const {
      user: { providerData, uid },
    } = await firebase.auth().signInWithPopup(provider);

    const { displayName, photoURL, email } = providerData[0];

    const updates = {};
    updates[`/user/name`] = displayName;
    updates[`/user/picture`] = photoURL;
    updates[`/user/email`] = email;

    await firebase
      .database()
      .ref(`/state/${uid}`)
      .update(updates);

    dispatch({ type: SIGN_IN_FACEBOOK_SUCCESS });
    dispatch({ type: LOADING, payload: false });
  } catch (e) {
    dispatch({
      type: SIGN_IN_FACEBOOK_FAIL,
      payload: e,
    });
    dispatch({ type: LOADING, payload: false });
  }
};
