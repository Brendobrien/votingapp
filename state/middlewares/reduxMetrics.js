import pushDataToFirebase from '../firebase/pushDataToFirebase';
import { LOADING } from '../loading/types';

const reduxMetrics = () => next => action => {
  const data = {};
  switch (action.type) {
    case LOADING: {
    }
    default: {
      data.type = action.type;
      const { payload } = action;
      if (typeof payload === 'boolean' || action.payload) {
        if (
          typeof payload !== 'object' ||
          typeof payload.getMonth === 'function'
        ) {
          data.payload = action.payload;
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
