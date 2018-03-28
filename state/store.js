import { Platform } from 'react-native';
import {
  applyMiddleware,
  combineReducers,
  createStore,
  compose,
} from 'redux';
import reduxThunk from 'redux-thunk';

import reduxMetrics from './middlewares/reduxMetrics';

import language from './language/reducer';
import loading from './loading/reducer';
import nav from './nav/reducer';
import polls from './polls/reducer';
import user from './user/reducer';

const appReducer = combineReducers({
  language,
  loading,
  nav,
  polls,
  user,
});

const rootReducer = (state, action) =>
  appReducer(state, action);

const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(
      reduxThunk,
      reduxMetrics,
    ),
  ),
);

export default store;
