import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { DropTarget } from 'react-dnd'
import cx from 'classnames'
import ItemTypes from '../../constants/ItemTypes'
import { storyDropped } from '../../actions/LaneActions'

const laneTarget = {
  drop (props, monitor, component) {
    const droppedItem = {
      newLaneId: props.laneId,
      draggedStoryId: monitor.getItem().storyId,
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
    isOver: monitor.isOver(),
    hoverItem: monitor.getItem()
  }
}

class LaneDropTarget extends Component {
  render () {
    const { connectDropTarget, hoverItem, id, storyIds } = this.props
    let { isOver } = this.props

    // Override isOver - set to false if the target is immediately above or below
    if (isOver && hoverItem && storyIds) {
      const hoverItemIndex = storyIds.indexOf(hoverItem.storyId)
      const targetIdIndex = storyIds.indexOf(id)
      isOver = hoverItem.storyId !== id && hoverItemIndex - 1 !== targetIdIndex
    }

    return connectDropTarget(
      <div className={cx(['drop-target', { 'is-over': isOver }])}>
        {this.props.children}
      </div>
    )
  }
}

export default compose(
  connect(),
  DropTarget(ItemTypes.STORY, laneTarget, collect)
)(LaneDropTarget)
