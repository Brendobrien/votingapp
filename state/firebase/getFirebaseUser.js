import firebase from 'firebase';
import onceFirebase from './onceFirebase';
import setLoading from '../loading/setLoading';
import {
  GET_FIREBASE_USER_FAIL,
  GET_FIREBASE_USER_PENDING,
  GET_FIREBASE_USER_SUCCESS,
} from './types';

export default () => async dispatch => {
  dispatch(setLoading(true));
  dispatch({
    type: GET_FIREBASE_USER_PENDING,
  });

  try {
    const value = await onceFirebase();

    if (value) {
      dispatch({
        type: GET_FIREBASE_USER_SUCCESS,
        payload: value,
      });
      dispatch(setLoading(false));
    } else {
      dispatch({
        type: GET_FIREBASE_USER_FAIL,
        payload: 'no firebase user',
      });
      dispatch(setLoading(false));
    }
  } catch (e) {
    dispatch({
      type: GET_FIREBASE_USER_FAIL,
      payload: e,
    });
    dispatch(setLoading(false));
  }
};
