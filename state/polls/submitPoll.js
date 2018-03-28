import firebase from 'firebase';
import {
  SUBMIT_POLL_FAIL,
  SUBMIT_POLL_PENDING,
  SUBMIT_POLL_SUCCESS,
} from './types';
import updateFirebase from '../firebase/updateFirebase';

export default (valid, poll, polls) =>
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
          uid,
        } = firebase.auth().currentUser;
        const id = `${uid}_${
          Object.keys(polls).length
        }`;
        const update = {};
        update[id] = poll;

        try {
          await updateFirebase(
            'polls',
            update,
          );
          dispatch({
            type: SUBMIT_POLL_SUCCESS,
            payload: update,
          });
        } catch (e) {
          dispatch({
            type: SUBMIT_POLL_FAIL,
            payload: e,
          });
        }
      };
