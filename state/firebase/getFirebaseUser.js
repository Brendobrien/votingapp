import firebase from 'firebase';
import onceFirebase from './onceFirebase';
import { LOADING } from '../loading/types';
import {
  GET_FIREBASE_USER_FAIL,
  GET_FIREBASE_USER_PENDING,
  GET_FIREBASE_USER_SUCCESS,
} from './types';

const getUser = () => async dispatch => {
  dispatch({
    type: LOADING,
    payload: true,
  });
  dispatch({
    type: GET_FIREBASE_USER_PENDING,
  });

  try {
    const value = await onceFirebase(
      '',
    );

    if (value) {
      dispatch({
        type: GET_FIREBASE_USER_SUCCESS,
        payload: value,
      });
      dispatch({
        type: LOADING,
        payload: false,
      });
    } else {
      dispatch({
        type: GET_FIREBASE_USER_FAIL,
        payload: 'no firebase user',
      });
      dispatch({
        type: LOADING,
        payload: false,
      });
    }
  } catch (e) {
    dispatch({
      type: GET_FIREBASE_USER_FAIL,
      payload: e,
    });
    dispatch({
      type: LOADING,
      payload: false,
    });
  }
};

export default getUser;
