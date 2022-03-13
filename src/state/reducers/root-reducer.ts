import { combineReducers } from 'redux';
import accountReducer from './account-reducer';
import rangesReducer from './ranges-reducer';

export type IRootState = ReturnType<typeof RootReducer>;

const RootReducer = combineReducers({
  account: accountReducer,
  range: rangesReducer,
});

export default RootReducer;
