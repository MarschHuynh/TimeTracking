import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist'
import TTReducer from './../common/reducer';


export default function configureStoreWeb(initialState) {
  const store = createStore(TTReducer,initialState,applyMiddleware(thunk));
  // const store = createStore(TTReducer, initialState);
  return store;
}
