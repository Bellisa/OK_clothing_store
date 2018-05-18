import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import * as reducers from './reducers';
import { rootSaga } from './sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create saga middleware
const sagaMiddleware = createSagaMiddleware();

const rootReducers = combineReducers(reducers);

export const store = createStore(
  rootReducers,
  // integrate middleware to store
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

// run sagas
sagaMiddleware.run(rootSaga);
// second argument is used to add redux dev tool (should be pre-installed in browser)
