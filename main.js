import React from 'react'
import { render } from 'react-dom'

import './src/scss/main.scss'

const Main = () => {
  return (
    <div>
      <h1>React billboard</h1>
    </div>
  )
}

render(<Main/>, document.getElementById('app'))
