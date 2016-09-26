/**
* @providesModule Store
*/
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist'
import {AsyncStorage} from 'react-native'
import TTReducer from './common/reducer';


var createTTStore = applyMiddleware(thunk)(createStore);

export default function configureStore(onComplete) {

  const store = autoRehydrate()(createTTStore)(TTReducer);
  persistStore(store, {storage: AsyncStorage}, onComplete);

  return store;
}
