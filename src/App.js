import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './reducers/CombinedReducers'
import { loadState, saveState } from './storage/localStorage'
import BoardView from './views/BoardView'

import './styles/main.scss'

const App = () => {
  const persistedState = loadState()
  const store = createStore(rootReducer, persistedState, applyMiddleware(thunk, logger()))

  store.subscribe(() => {
    saveState(store.getState())
  })

  return (
    <Provider store={store}>
      <BoardView />
    </Provider>
  )
}

render(<App/>, document.getElementById('app'))
