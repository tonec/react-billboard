import React, { Component } from 'react'
import { DropTarget } from 'react-dnd'
import ItemTypes from '../../constants/ItemTypes'

const laneTarget = {
  drop (props, monitor) {
    console.log('laneTarget props: ', props)
    console.log('laneTarget monitor: ', monitor)
    // moveStory (props.id)
  }
}

function collect (connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
}

class LaneDragTarget extends Component {
  render () {
    const { connectDropTarget, isOver } = this.props

    return connectDropTarget(
      <div className='drop-target' style={{ border: isOver ? '1px solid red' : 'none' }}>
        {this.props.children}
      </div>
    )
  }
}

export default DropTarget(ItemTypes.STORY, laneTarget, collect)(LaneDragTarget)
