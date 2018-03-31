import firebase from 'firebase';
import uuidv4 from 'uuid/v4';
import {
  SUBMIT_POLL_FAIL,
  SUBMIT_POLL_PENDING,
  SUBMIT_POLL_SUCCESS,
} from './types';
import updateFirebase from '../firebase/updateFirebase';
import goBack from '../../navigation/goBack';

export default (
  valid,
  poll,
  dispatch,
  history,
) =>
  valid
    ? {
        type: SUBMIT_POLL_FAIL,
        payload: 'invalid',
      }
    : async dispatch => {
        dispatch({
          type: SUBMIT_POLL_PENDING,
        });

        const {
          currentUser: { uid },
        } = firebase.auth();
        const update = {};
        update[
          `${uid}___${uuidv4()}`
        ] = poll;

        try {
          await updateFirebase(
            update,
            'polls/',
            false,
          );
          dispatch({
            type: SUBMIT_POLL_SUCCESS,
            payload: update,
          });
          goBack(dispatch, history);
        } catch (e) {
          dispatch({
            type: SUBMIT_POLL_FAIL,
            payload: e,
          });
        }
      };
