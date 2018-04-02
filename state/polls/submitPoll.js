import firebase from 'firebase';
import uuidv4 from 'uuid/v4';
import {
  SUBMIT_POLL_FAIL,
  SUBMIT_POLL_PENDING,
  SUBMIT_POLL_SUCCESS,
} from './types';
import goBack from '../../navigation/goBack';
import getPolls from './getPolls';
import getVotes from '../votes/getVotes';
import updateFirebase from '../firebase/updateFirebase';

export default (
  invalid,
  poll,
  dispatch,
  history,
) =>
  invalid
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
        const payload = {};
        payload[
          `${uid}___${uuidv4()}`
        ] = poll;

        try {
          await updateFirebase(
            payload,
            'polls/',
            false,
          );
          dispatch({
            type: SUBMIT_POLL_SUCCESS,
          });
          dispatch(getPolls());
          dispatch(getVotes());
          goBack(dispatch, history);
        } catch (e) {
          dispatch({
            type: SUBMIT_POLL_FAIL,
            payload: e,
          });
        }
      };
