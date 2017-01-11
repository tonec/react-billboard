import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers/CombinedReducers'
import { loadState, saveState } from './storage/localStorage'
import BoardView from './views/BoardView'

import './styles/main.scss'

const App = () => {
  const persistedState = loadState()
  const store = createStore(reducers, persistedState)

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
