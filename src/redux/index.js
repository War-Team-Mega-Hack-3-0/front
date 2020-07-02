import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '../sagas';

import { authReducer } from './auth';

function createAppStore() {
  const sagaMiddleware = createSagaMiddleware();

  const persistConfig = {
    storage,
    key: 'vtex-app',
    whitelist: ['authReducer'],
  };
  const reducers = combineReducers({ authReducer })

  const composeEnhancers = process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

  const persistedReducer = persistReducer(persistConfig, reducers);

  const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  return { store, persistor };
}

export const { store, persistor } = createAppStore()
