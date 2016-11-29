import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers/CombinedReducers'
import BoardView from './views/BoardView'

import './styles/main.scss'

const App = () => {
  const store = createStore(reducers, {})

  return (
    <Provider store={store}>
      <BoardView />
    </Provider>
  )
}

render(<App/>, document.getElementById('app'))
