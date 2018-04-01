import {
  GET_USER_IP_FAIL,
  GET_USER_IP_PENDING,
  GET_USER_IP_SUCCESS,
} from './types';

export default () => async dispatch => {
  dispatch({
    type: GET_USER_IP_PENDING,
  });

  try {
    let { ip } = await fetch(
      'https://api.ipify.org?format=json',
    ).then(x => x.json());
    ip = ip.replace(/\./g, '_');

    dispatch({
      type: GET_USER_IP_SUCCESS,
      payload: ip,
    });
  } catch (e) {
    dispatch({
      type: GET_USER_IP_FAIL,
      payload: e,
    });
  }
};
