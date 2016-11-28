import React from 'react'
import { render } from 'react-dom'
import { BoardView } from './views/Board'

import './styles/main.scss'

const App = () => {
  return (
    <div>
      <BoardView />
    </div>
  )
}

render(<App/>, document.getElementById('app'))
