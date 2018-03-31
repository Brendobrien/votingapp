import firebase from 'firebase';
import {
  CHANGE_LANGUAGE_PENDING,
  CHANGE_LANGUAGE_SUCCESS,
  CHANGE_LANGUAGE_FAIL,
} from './types';
import updateFirebase from '../firebase/updateFirebase';

export default language => async dispatch => {
  dispatch({
    type: CHANGE_LANGUAGE_PENDING,
  });

  const {
    currentUser,
  } = firebase.auth();
  if (currentUser != null) {
    try {
      await updateFirebase({
        language,
      });

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
