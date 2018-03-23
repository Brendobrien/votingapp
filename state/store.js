import { Platform } from 'react-native';
import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import ReduxThunk from 'redux-thunk';

import loading from './loading/reducer';
import nav from './nav/reducer';
import user from './user/reducer';

const appReducer = combineReducers({
  loading,
  nav,
  user,
});

const rootReducer = (state, action) => appReducer(state, action);

const store = createStore(
  rootReducer,
  {},
  compose(applyMiddleware(ReduxThunk)),
);

export default store;
