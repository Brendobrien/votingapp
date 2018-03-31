import {
  GET_VOTES_FAIL,
  GET_VOTES_PENDING,
  GET_VOTES_SUCCESS,
} from './types';
import { LOADING } from '../loading/types';
import onceFirebase from '../firebase/onceFirebase';

export default () => async dispatch => {
  dispatch({
    type: LOADING,
    payload: true,
  });
  dispatch({ type: GET_VOTES_PENDING });

  try {
    const votes = await onceFirebase(
      'votes/',
      false,
    );
    console.log(votes);
    dispatch({
      type: GET_VOTES_SUCCESS,
      payload: votes,
    });
    dispatch({
      type: LOADING,
      payload: false,
    });
  } catch (e) {
    dispatch({
      type: GET_VOTES_FAIL,
      payload: e,
    });
    dispatch({
      type: LOADING,
      payload: false,
    });
  }
};
