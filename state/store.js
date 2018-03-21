import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import ReduxThunk from 'redux-thunk';

// state
import nav from './nav/reducer';
import user from './user/reducer';

const appReducer = combineReducers({
  // nav,
  user,
});

const rootReducer = (state, action) => appReducer(state, action);

const store = createStore(
  rootReducer,
  {},
  compose(applyMiddleware(ReduxThunk)),
);

export default store;
