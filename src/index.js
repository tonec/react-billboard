import React from 'react'
import { render } from 'react-dom'

import './styles/main.scss'

const App = () => {
  return (
    <div>
      <div></div>
      <h1>React billboard</h1>
    </div>
  )
}

render(<App/>, document.getElementById('app'))
