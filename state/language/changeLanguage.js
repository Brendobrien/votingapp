import firebase from 'firebase';
import {
  CHANGE_LANGUAGE_PENDING,
  CHANGE_LANGUAGE_SUCCESS,
  CHANGE_LANGUAGE_FAIL,
} from './types';

export default language => async dispatch => {
  dispatch({
    type: CHANGE_LANGUAGE_PENDING,
  });

  const {
    currentUser,
  } = firebase.auth();
  if (currentUser != null) {
    try {
      const { uid } = currentUser;
      await firebase
        .database()
        .ref(`state/${uid}/language`)
        .set(language);

      dispatch({
        type: CHANGE_LANGUAGE_SUCCESS,
        payload: language,
      });
    } catch (err) {
      dispatch({
        type: CHANGE_LANGUAGE_FAIL,
        payload: err,
      });
    }
  } else {
    dispatch({
      type: CHANGE_LANGUAGE_FAIL,
      payload: 'currentUser is null',
    });

    dispatch({
      type: CHANGE_LANGUAGE_SUCCESS,
      payload: language,
    });
  }
};
