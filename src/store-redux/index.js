import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import counterReducer from './couter'
import homeReducer from './home'

// 开发环境下，打开redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducer = combineReducers({
  counter: counterReducer,
  home: homeReducer
})

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store