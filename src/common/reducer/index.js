import { combineReducers } from 'redux'
import user from './user'
import navigation from './navigation'

const TTReducer = combineReducers({
  user,
  navigation
})

export default TTReducer
