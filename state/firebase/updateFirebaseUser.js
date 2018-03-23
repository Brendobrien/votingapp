import { forOwn } from 'lodash';
import firebase from 'firebase';
import {
  UPDATE_FIREBASE_USER_FAIL,
  UPDATE_FIREBASE_USER_PENDING,
  UPDATE_FIREBASE_USER_SUCCESS,
} from './types';

const updateUser = newUserData => async dispatch => {
  dispatch({
    type: UPDATE_FIREBASE_USER_PENDING,
  });
  try {
    const { currentUser } = firebase.auth();
    const { uid } = currentUser;
    const userRef = firebase.database().ref(`state/${uid}/user`);
    const updates = {};
    forOwn(newUserData, (value, key) => {
      updates[`/${key}`] = value;
    });
    await userRef.update(updates);
    dispatch({
      type: UPDATE_FIREBASE_USER_SUCCESS,
      payload: newUserData,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_FIREBASE_USER_FAIL,
      payload: e,
    });
  }
};

export default updateUser;
