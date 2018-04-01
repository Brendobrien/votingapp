import firebase from 'firebase';
import {
  SUBMIT_VOTE_FAIL,
  SUBMIT_VOTE_PENDING,
  SUBMIT_VOTE_SUCCESS,
} from './types';
import setLoading from '../loading/setLoading';
import updateFirebase from '../firebase/updateFirebase';

export default (
  ip,
  pollId,
  vote,
  votes,
) => async dispatch => {
  dispatch(setLoading(true));
  dispatch({
    type: SUBMIT_VOTE_PENDING,
  });

  const {
    currentUser,
  } = firebase.auth();
  try {
    const payload = votes;
    if (!payload[pollId]) {
      payload[pollId] = {};
    }
    if (currentUser != null) {
      const { uid } = currentUser;
      await updateFirebase(
        vote,
        `votes/${pollId}/`,
        true,
      );

      payload[pollId][uid] = vote;
      dispatch({
        type: SUBMIT_VOTE_SUCCESS,
        payload,
      });
      dispatch(setLoading(false));
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

      payload[pollId][ip] = vote;
      dispatch({
        type: SUBMIT_VOTE_SUCCESS,
        payload,
      });
      dispatch(setLoading(false));
    }
  } catch (err) {
    dispatch({
      type: SUBMIT_VOTE_FAIL,
      payload: err,
    });
    dispatch(setLoading(true));
  }
};
