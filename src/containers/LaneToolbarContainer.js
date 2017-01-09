import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid'
import LaneToolbar from '../components/Lane/LaneToolbar'
import { storyAdded, laneDeleted } from '../actions/LaneToolbarActions'

class LaneToolbarContainer extends Component {

  constructor (props) {
    super(props)

    this.onAddStory = this.onAddStory.bind(this)
    this.onDeleteLane = this.onDeleteLane.bind(this, props.laneId)
  }

  onDeleteLane (id) {
    if (this.props.storyLength === 0) {
      this.props.laneDeleted(id)
    }
  }

  onAddStory () {
    this.props.storyAdded({
      id: uuid.v4(),
      title: 'New title',
      laneId: this.props.laneId
    })
  }

  render () {
    return (
      <LaneToolbar
        { ...this.props }
        deleteLane={this.onDeleteLane}
        addStory={this.onAddStory}
      />
    )
  }
}

LaneToolbarContainer.propTypes = {
  laneId: PropTypes.string.isRequired,
  storyLength: PropTypes.number.isRequired
}

export default connect(null, { storyAdded, laneDeleted })(LaneToolbarContainer)
