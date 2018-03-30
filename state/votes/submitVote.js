import firebase from 'firebase';
import {
  SUBMIT_VOTE_PENDING,
  SUBMIT_VOTE_SUCCESS,
  SUBMIT_VOTE_FAIL,
} from './types';
import updateFirebase from '../firebase/updateFirebase';

export default vote => async dispatch => {
  dispatch({
    type: SUBMIT_VOTE_PENDING,
  });

  // const [uid, id] = Object.keys(vote)[0].split('___')
  const {
    currentUser,
  } = firebase.auth();
  try {
    if (currentUser != null) {
      const { uid } = currentUser;
      await updateFirebase(
        'votes',
        vote,
        uid,
      );

      dispatch({
        type: SUBMIT_VOTE_SUCCESS,
        payload: vote,
      });
    } else {
      dispatch({
        type: SUBMIT_VOTE_FAIL,
        payload: 'currentUser is null',
      });

      const ip = await fetch(
        'https://api.ipify.org?format=json',
      ).then(x => x.json());
      console.log(data);
      await updateFirebase(
        'votes',
        vote,
        uid,
        'unAuth',
      );

      dispatch({
        type: SUBMIT_VOTE_SUCCESS,
        payload: vote,
      });
    }
  } catch (err) {
    dispatch({
      type: SUBMIT_VOTE_FAIL,
      payload: err,
    });
  }
};
