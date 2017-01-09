import React, { PropTypes } from 'react'

import LaneContainer from '../Lane/LaneContainer'

const Board = (props) => {
  const { addLane, lanes } = props

  return (
    <div className='board'>

      <div className='board-header'>
        <button
          className='btn btn-primary'
          onClick={addLane}
        >Add lane</button>
      </div>

      <div className='board-body'>
        {lanes.map(lane => {
          return (
            <LaneContainer
              key={lane.id}
              laneId={lane.id}
              name={lane.name}
              editing={lane.editing}
              storyIds={lane.storyIds}
            />
          )
        })}
      </div>

    </div>
  )
}

Board.propTypes = {
  addLane: PropTypes.func.isRequired
}

export default Board
