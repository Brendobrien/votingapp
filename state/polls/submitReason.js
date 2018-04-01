import {
  SUBMIT_REASON_FAIL,
  SUBMIT_REASON_PENDING,
  SUBMIT_REASON_SUCCESS,
} from './types';
import updateFirebase from '../firebase/updateFirebase';

export default (
  invalid = true,
  polls,
  pollId,
  reason,
  type,
) =>
  invalid
    ? {
        type: SUBMIT_REASON_FAIL,
        payload: 'invalid',
      }
    : async dispatch => {
        dispatch({
          type: SUBMIT_REASON_PENDING,
        });

        try {
          const payload = polls;
          payload[pollId][type] = `${
            polls[pollId][type]
          }, ${reason}`;
          await updateFirebase(
            payload,
            'polls/',
            false,
          );

          dispatch({
            type: SUBMIT_REASON_SUCCESS,
            payload,
          });
        } catch (e) {
          dispatch({
            type: SUBMIT_REASON_FAIL,
            payload: e,
          });
        }
      };
