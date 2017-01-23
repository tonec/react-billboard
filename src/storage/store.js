import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from '../reducers/RootReducer'
import { loadState } from '../storage/localStorage'

const persistedState = loadState()
const store = createStore(rootReducer, persistedState, applyMiddleware(thunk, logger()))

export default store
