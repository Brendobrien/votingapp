import {
  SUBMIT_POLL_FAIL,
  SUBMIT_POLL_PENDING,
  SUBMIT_POLL_SUCCESS,
} from './types';
import updateFirebase from '../firebase/updateFirebase';

const defaultPoll = {
  x9iq1a0F3GOUjz5VpmPlmCnKAXV2_0: {
    name: 'ye',
    yes: 'a, b, c',
    no: 'e, d, f',
  },
};

export default (
  poll = defaultPoll,
) => async dispatch => {
  dispatch({
    type: SUBMIT_POLL_PENDING,
  });

  const uid = Object.keys(
    poll,
  )[0].split('_')[0];
  try {
    await updateFirebase(
      'polls',
      poll,
      uid,
    );
    dispatch({
      type: SUBMIT_POLL_SUCCESS,
      payload: poll,
    });
  } catch (e) {
    dispatch({
      type: SUBMIT_POLL_FAIL,
      payload: e,
    });
  }
};
