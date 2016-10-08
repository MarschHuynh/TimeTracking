import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import TTReducer from './../common/reducer';


export default function configureStoreWeb(initialState) {
  const store = createStore(TTReducer,initialState,applyMiddleware(thunk));
  return store;
}
