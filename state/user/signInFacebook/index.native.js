import Expo from 'expo';
import firebase from 'firebase';
import { SIGN_IN_FACEBOOK_FAIL, SIGN_IN_FACEBOOK_SUCCESS } from '../types';

export default () => async dispatch => {
  try {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
      '1292315704246391',
      { permissions: ['email', 'public_profile'] },
    );

    if (type === 'success') {
      const credential = firebase.auth.FacebookAuthProvider.credential(token);
      const { providerData } = await firebase
        .auth()
        .signInWithCredential(credential);
      console.log(providerData[0]);

      dispatch({
        type: SIGN_IN_FACEBOOK_SUCCESS,
        payload: providerData[0],
      });
    }
  } catch (e) {
    dispatch({
      type: SIGN_IN_FACEBOOK_FAIL,
      payload: e,
    });
  }
};
