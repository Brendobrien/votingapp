import { SHARE_POLL } from '../types';

export default url => {
  alert(`Copied To Clipboard\n${url}`);

  return {
    type: SHARE_POLL,
    payload: url,
  };
};
