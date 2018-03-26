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

  let user = {};
  try {
    const value = await onceFirebase(
      'user',
    );
    dispatch({
      type: GET_FIREBASE_USER_SUCCESS,
      payload: value,
    });
    dispatch({
      type: LOADING,
      payload: false,
    });
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
