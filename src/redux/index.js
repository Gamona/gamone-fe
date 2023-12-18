import { combineReducers, createStore } from 'redux'
import loadingReducer from './loading'
import tokenReducer from './token'
import tokenUserReducer from './token_user'

const reducer =  combineReducers({
  loadingReducer,
  tokenReducer,
  tokenUserReducer
})

const store = createStore(reducer)
export default store
