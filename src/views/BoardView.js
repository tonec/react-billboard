import React from 'react'
import BoardContainer from '../containers/BoardContainer'

const BoardView = (props) => {
  return (
    <div className='layout-col-one'>

      <h1>React Billboard</h1>

      <BoardContainer
        { ...props }
      />

    </div>
  )
}

export default BoardView
