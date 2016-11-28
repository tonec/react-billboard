import React from 'react'
import { render } from 'react-dom'

const Main = () => {
  return (
    <div>
      <h1>React billboard</h1>
    </div>
  )
}

render(<Main/>, document.getElementById('app'))
