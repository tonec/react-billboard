import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import BoardView from './views/BoardView'
import store from './storage/store'
import { saveState } from './storage/localStorage'
import './styles/main.scss'

const App = () => {
  
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
