import {
  DELETE_POLL_FAIL,
  DELETE_POLL_PENDING,
  DELETE_POLL_SUCCESS,
} from './types';
import getPolls from './getPolls';
import getVotes from '../votes/getVotes';
import setLoading from '../loading/setLoading';
import updateFirebase from '../firebase/updateFirebase';

export default pollId => async dispatch => {
  dispatch(setLoading(true));
  dispatch({
    type: DELETE_POLL_PENDING,
  });

  try {
    const update = {};
    update[pollId] = null;
    await updateFirebase(
      update,
      'polls/',
      false,
    );
    await updateFirebase(
      update,
      'votes/',
      false,
    );
    dispatch({
      type: DELETE_POLL_SUCCESS,
    });
    dispatch(getPolls());
    dispatch(getVotes());
  } catch (e) {
    dispatch({
      type: DELETE_POLL_FAIL,
      payload: e,
    });
    dispatch(setLoading(false));
  }
};
