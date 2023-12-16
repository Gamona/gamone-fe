import { combineReducers, createStore } from 'redux'
import loadingReducer from './loading'
import tokenReducer from './token'

const reducer =  combineReducers({
  loadingReducer,
  tokenReducer
})

const store = createStore(reducer)
export default store
