import {
  GET_VOTES_FAIL,
  GET_VOTES_PENDING,
  GET_VOTES_SUCCESS,
} from './types';
import onceFirebase from '../firebase/onceFirebase';
import setLoading from '../loading/setLoading';

export default () => async dispatch => {
  dispatch(setLoading(true));
  dispatch({ type: GET_VOTES_PENDING });

  try {
    const votes = await onceFirebase(
      'votes/',
      false,
    );
    dispatch({
      type: GET_VOTES_SUCCESS,
      payload: votes,
    });
    dispatch(setLoading(false));
  } catch (e) {
    dispatch({
      type: GET_VOTES_FAIL,
      payload: e,
    });
    dispatch(setLoading(false));
  }
};
