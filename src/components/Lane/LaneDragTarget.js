import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { DropTarget } from 'react-dnd'
import ItemTypes from '../../constants/ItemTypes'
import { storyDropped } from '../../actions/LaneActions'

const laneTarget = {
  drop (props, monitor, component) {
    const droppedItem = {
      newLaneId: props.laneId,
      storyId: monitor.getItem().storyId
    }
    props.dispatch(storyDropped(droppedItem))
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

export default compose(
  connect(),
  DropTarget(ItemTypes.STORY, laneTarget, collect)
)(LaneDragTarget)
