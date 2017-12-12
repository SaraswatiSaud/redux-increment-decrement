import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import {createLogger} from 'redux-logger';
import allReducers from '../reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
const logger = createLogger();

export const store = createStore(
  allReducers,
  composeWithDevTools(
    applyMiddleware(
      thunk,
      promise,
      logger
    )
  )
);
