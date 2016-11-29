import React from 'react'
import Lane from './Lane'

const Board = (props) => {
  return (
    <div className='board'>

      <div className='board-header'>
        <button
          className='btn btn-primary'
          onClick={props.addLane}
        >Add lane</button>
      </div>

      <div className='board-body'>
        {props.lanes.map(lane => {
          return (
            <Lane key={lane.id} name={lane.name} />
          )
        })}
      </div>
    </div>
  )
}

export default Board
