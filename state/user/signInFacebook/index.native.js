import Expo from 'expo';
import firebase from 'firebase';
import {
  SIGN_IN_FACEBOOK_FAIL,
  SIGN_IN_FACEBOOK_PENDING,
  SIGN_IN_FACEBOOK_SUCCESS,
} from '../types';

export default () => async dispatch => {
  dispatch({ type: SIGN_IN_FACEBOOK_PENDING });

  try {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
      '1292315704246391',
      { permissions: ['email', 'public_profile'] },
    );

    if (type === 'success') {
      const credential = firebase.auth.FacebookAuthProvider.credential(token);
      const { providerData, uid } = await firebase
        .auth()
        .signInWithCredential(credential);

      const { displayName, photoURL, email } = providerData[0];

      const updates = {};
      updates[`/user/name`] = displayName;
      updates[`/user/picture`] = photoURL;
      updates[`/user/email`] = email;

      await firebase
        .database()
        .ref(`/state/${uid}`)
        .update(updates);
      dispatch({
        type: SIGN_IN_FACEBOOK_SUCCESS,
        payload: providerData[0],
      });
    } else {
      dispatch({
        type: SIGN_IN_FACEBOOK_FAIL,
        payload: type,
      });
    }
  } catch (e) {
    dispatch({
      type: SIGN_IN_FACEBOOK_FAIL,
      payload: e,
    });
  }
};
