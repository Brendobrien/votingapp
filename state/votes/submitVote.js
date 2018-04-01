import firebase from 'firebase';
import {
  SUBMIT_VOTE_FAIL,
  SUBMIT_VOTE_PENDING,
  SUBMIT_VOTE_SUCCESS,
} from './types';
import updateFirebase from '../firebase/updateFirebase';

export default vote => async dispatch => {
  dispatch({
    type: SUBMIT_VOTE_PENDING,
  });

  const {
    currentUser,
  } = firebase.auth();
  try {
    const payload = {};
    if (currentUser != null) {
      const { uid } = currentUser;
      await updateFirebase(
        vote,
        'votes/',
        true,
      );

      payload[uid] = vote;
      dispatch({
        type: SUBMIT_VOTE_SUCCESS,
        payload,
      });
    } else {
      dispatch({
        type: SUBMIT_VOTE_FAIL,
        payload: 'currentUser is null',
      });

      let { ip } = await fetch(
        'https://api.ipify.org?format=json',
      ).then(x => x.json());
      ip = ip.replace(/\./g, '_');
      await updateFirebase(
        vote,
        `votes/${ip}`,
        false,
      );

      payload[ip] = vote;
      dispatch({
        type: SUBMIT_VOTE_SUCCESS,
        payload,
      });
    }
  } catch (err) {
    dispatch({
      type: SUBMIT_VOTE_FAIL,
      payload: err,
    });
  }
};
