import {
  GET_POLLS_FAIL,
  GET_POLLS_PENDING,
  GET_POLLS_SUCCESS,
} from './types';
import { LOADING } from '../loading/types';
import onceFirebase from '../firebase/onceFirebase';

export default () => async dispatch => {
  dispatch({
    type: LOADING,
    payload: true,
  });
  dispatch({ type: GET_POLLS_PENDING });

  try {
    const polls = await onceFirebase(
      'polls/',
      false,
    );
    console.log(polls);
    dispatch({
      type: GET_POLLS_SUCCESS,
      payload: polls,
    });
    dispatch({
      type: LOADING,
      payload: false,
    });
  } catch (e) {
    dispatch({
      type: GET_POLLS_FAIL,
      payload: e,
    });
    dispatch({
      type: LOADING,
      payload: false,
    });
  }
};
