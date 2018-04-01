import Expo from 'expo';
import firebase from 'firebase';

import { LOADING } from '../../loading/types';
import {
  SIGN_IN_FACEBOOK_FAIL,
  SIGN_IN_FACEBOOK_PENDING,
  SIGN_IN_FACEBOOK_SUCCESS,
} from '../types';
import goToRoute from '../../../navigation/goToRoute';
import updateFirebase from '../../firebase/updateFirebase';

export default (
  dispatch,
  history,
) => async dispatch => {
  dispatch({
    type: LOADING,
    payload: true,
  });
  dispatch({
    type: SIGN_IN_FACEBOOK_PENDING,
  });

  try {
    const {
      type,
      token,
    } = await Expo.Facebook.logInWithReadPermissionsAsync(
      '1292315704246391',
      {
        permissions: [
          'email',
          'public_profile',
        ],
      },
    );

    if (type === 'success') {
      const credential = firebase.auth.FacebookAuthProvider.credential(
        token,
      );
      const {
        providerData,
        uid,
      } = await firebase
        .auth()
        .signInWithCredential(
          credential,
        );

      const {
        displayName,
        photoURL,
        email,
      } = providerData[0];

      const updates = {};
      updates[
        `/user/name`
      ] = displayName;
      updates[
        `/user/picture`
      ] = photoURL;
      updates[`/user/email`] = email;
      updates[`/user/uid`] = uid;
      await updateFirebase(updates);

      dispatch({
        type: SIGN_IN_FACEBOOK_SUCCESS,
      });
      goToRoute(
        dispatch,
        history,
        'Info',
      );
      dispatch({
        type: LOADING,
        payload: false,
      });
    } else {
      dispatch({
        type: SIGN_IN_FACEBOOK_FAIL,
        payload: type,
      });
      dispatch({
        type: LOADING,
        payload: false,
      });
    }
  } catch (e) {
    dispatch({
      type: SIGN_IN_FACEBOOK_FAIL,
      payload: e,
    });
    dispatch({
      type: LOADING,
      payload: false,
    });
  }
};
