import firebase from 'firebase';
import {
  GET_FIREBASE_USER_FAIL,
  GET_FIREBASE_USER_PENDING,
  GET_FIREBASE_USER_SUCCESS,
} from './types';

const getUser = () => async dispatch => {
  dispatch({
    type: GET_FIREBASE_USER_PENDING,
  });

  let user = {};
  try {
    const { currentUser } = firebase.auth();
    const { uid } = currentUser;
    const userRef = firebase.database().ref(`state/${uid}/user`);
    await userRef.once('value', userSnapshot => {
      const value = userSnapshot.val();
      dispatch({
        type: GET_FIREBASE_USER_SUCCESS,
        payload: value,
      });
      user = value;
    });
  } catch (e) {
    dispatch({
      type: GET_FIREBASE_USER_FAIL,
      payload: e,
    });
  }
  return user;
};

export default getUser;
