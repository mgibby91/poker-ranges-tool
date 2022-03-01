import { combineReducers } from 'redux';
import accountReducer from './account-reducer';

const RootReducer = combineReducers({
  account: accountReducer,
});

export default RootReducer;
