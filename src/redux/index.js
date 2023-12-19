import { combineReducers, createStore } from 'redux'
import loadingReducer from './loading'
import tokenReducer from './token'
import tokenUserReducer from './token_user'
import profileReducer from './profile'

const reducer =  combineReducers({
  loadingReducer,
  tokenReducer,
  tokenUserReducer,
  profileReducer
})

const store = createStore(reducer)
export default store
