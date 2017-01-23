import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { DropTarget } from 'react-dnd'
import ItemTypes from '../../constants/ItemTypes'
import { storyDropped } from '../../actions/LaneActions'

const laneTarget = {

  hover (props, monitor, component) {
    // console.log('hover props', props)
  },

  drop (props, monitor, component) {
    const droppedItem = {
      newLaneId: props.laneId,
      dragStoryId: monitor.getItem().storyId,
      dropTargetId: props.id
    }

    // The target immediately below each story has the same id.
    // If these match no change is position is needed.
    if (droppedItem.dragStoryId !== droppedItem.dropTargetId) {
      props.dispatch(storyDropped(droppedItem))
    }
  }
}

function collect (connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
}

class LaneDropTarget extends Component {
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
)(LaneDropTarget)
