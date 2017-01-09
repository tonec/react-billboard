import React, { Component, PropTypes } from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import LaneContainer from '../Lane/LaneContainer'

class Board extends Component {
  render () {
    return (
      <div className='board'>

        <div className='board-header'>
          <button
            className='btn btn-primary'
            onClick={this.props.addLane}
          >Add lane</button>
        </div>

        <div className='board-body'>
          {this.props.lanes.map(lane => {
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
}

Board.propTypes = {
  addLane: PropTypes.func.isRequired
}

export default DragDropContext(HTML5Backend)(Board)
