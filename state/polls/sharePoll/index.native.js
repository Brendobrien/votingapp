import { Alert } from 'react-native';
import { SHARE_POLL } from '../types';

export default url => {
  Alert.alert(
    'Copied to Clipboard',
    url,
  );

  return {
    type: SHARE_POLL,
    payload: url,
  };
};
