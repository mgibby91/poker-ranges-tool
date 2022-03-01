import { createStore, applyMiddleware } from 'redux';
import RootReducer from './reducers/root-reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export const Store = createStore(
  RootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);
