import firebase from 'firebase';
import {
  SUBMIT_VOTE_FAIL,
  SUBMIT_VOTE_PENDING,
  SUBMIT_VOTE_SUCCESS,
} from './types';
import updateFirebase from '../firebase/updateFirebase';

export default (
  ip,
  pollId,
  vote,
) => async dispatch => {
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
        `votes/${pollId}/`,
        true,
      );

      payload[pollId] = {};
      payload[pollId][uid] = vote;
      dispatch({
        type: SUBMIT_VOTE_SUCCESS,
        payload,
      });
    } else {
      dispatch({
        type: SUBMIT_VOTE_FAIL,
        payload: 'currentUser is null',
      });

      await updateFirebase(
        vote,
        `votes/${pollId}/${ip}`,
        false,
      );

      payload[pollId] = {};
      payload[pollId][ip] = vote;
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
