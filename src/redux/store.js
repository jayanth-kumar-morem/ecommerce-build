import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import createSagaMiddleware from "redux-saga"
import thunk from 'redux-thunk';
const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk];
if(process.env.NODE_ENV ==="development"){
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistStore };
