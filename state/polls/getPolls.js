import {
  GET_POLLS_FAIL,
  GET_POLLS_PENDING,
  GET_POLLS_SUCCESS,
} from './types';
import onceFirebase from '../firebase/onceFirebase';
import setLoading from '../loading/setLoading';

export default () => async dispatch => {
  dispatch(setLoading(true));
  dispatch({ type: GET_POLLS_PENDING });

  try {
    const polls = await onceFirebase(
      'polls/',
      false,
    );
    dispatch({
      type: GET_POLLS_SUCCESS,
      payload: polls,
    });
    dispatch(setLoading(false));
  } catch (e) {
    dispatch({
      type: GET_POLLS_FAIL,
      payload: e,
    });
    dispatch(setLoading(false));
  }
};
