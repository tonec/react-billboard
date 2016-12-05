import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid'
import LaneToolbar from './LaneToolbar'
import { storyAdded, laneDeleted } from '../../actions/LaneToolbarActions'

class LaneToolbarContainer extends Component {

  constructor (props) {
    super(props)

    this.onAddStory = this.onAddStory.bind(this)
    this.onDeleteLane = this.onDeleteLane.bind(this, props.laneId)
  }

  onDeleteLane (id) {
    this.props.laneDeleted(id)
  }

  onAddStory () {
    this.props.storyAdded({
      id: uuid.v4(),
      title: 'New title'
    })
  }

  render () {
    return (
      <LaneToolbar
        deleteLane={this.onDeleteLane}
        addStory={this.onAddStory}
      />
    )
  }
}

export default connect(null, { storyAdded, laneDeleted })(LaneToolbarContainer)
