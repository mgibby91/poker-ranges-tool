import { combineReducers } from 'redux';
import accountReducer from './account-reducer';

const reducers = combineReducers({
  account: accountReducer,
});

export default reducers;
