import { createStore, applyMiddleware, Store } from 'redux';
import { rootReducer } from '../reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export const store: Store<any> = createStore(rootReducer, applyMiddleware(thunk, logger));