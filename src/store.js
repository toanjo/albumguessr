import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import { listReducer } from './reducers/list.reducer';

import { listMiddleware } from './middlewares/list';
import { apiMiddleware } from './middlewares/api';

const rootReducer = combineReducers({
  list: listReducer
});

const featureMiddleware = [listMiddleware];
const coreMiddleware = [apiMiddleware];

const enhancer = compose(
  applyMiddleware(...featureMiddleware, ...coreMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    : compose
);

export const store = createStore(rootReducer, {}, enhancer);
