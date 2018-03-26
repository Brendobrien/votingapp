import pushDataToFirebase from '../firebase/pushDataToFirebase';
import { LOADING } from '../loading/types';

const reduxMetrics = () => next => action => {
  const { payload, type } = action;
  const data = {};
  switch (type) {
    case LOADING: {
    }
    default: {
      data.type = type;
      if (
        typeof payload === 'boolean' ||
        payload
      ) {
        if (
          typeof payload !== 'object' ||
          typeof payload.getMonth ===
            'function'
        ) {
          data.payload = payload;
        } else {
          data.payload = 'Object';
        }
      }
    }
  }
  if (data.type) {
    console.log(data);
    pushDataToFirebase(data);
  }
  return next(action);
};

export default reduxMetrics;
