import firebase from 'firebase';

import {
  SIGN_IN_FACEBOOK_FAIL,
  SIGN_IN_FACEBOOK_PENDING,
  SIGN_IN_FACEBOOK_SUCCESS,
} from '../types';
import goToRoute from '../../../navigation/goToRoute';
import setLoading from '../../loading/setLoading';
import updateFirebase from '../../firebase/updateFirebase';

export default (
  dispatch,
  history,
) => async dispatch => {
  dispatch(setLoading(true));
  dispatch({
    type: SIGN_IN_FACEBOOK_PENDING,
  });

  try {
    const provider = new firebase.auth.FacebookAuthProvider();
    const {
      user: { providerData, uid },
    } = await firebase
      .auth()
      .signInWithPopup(provider);

    const {
      displayName,
      photoURL,
      email,
    } = providerData[0];

    const updates = {};
    updates[`/user/name`] = displayName;
    updates[`/user/picture`] = photoURL;
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
    dispatch(setLoading(false));
  } catch (e) {
    dispatch({
      type: SIGN_IN_FACEBOOK_FAIL,
      payload: e,
    });
    dispatch(setLoading(false));
  }
};
