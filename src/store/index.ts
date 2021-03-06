import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import configureStore from './CreateStore';
import rootSaga from '../sagas';
import ReduxPersist from '../config/ReduxPersist';

export const reducers = combineReducers({
  user: require('./UserRedux').reducer,
});

export default () => {
  let finalReducers = reducers;

  if (ReduxPersist.active) {
    const persistConfig = ReduxPersist.storeConfig;
    finalReducers = persistReducer(persistConfig, reducers);
  }

  let { store } = configureStore(finalReducers, rootSaga);

  return store;
};
