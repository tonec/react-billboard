import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { ADD_STORY_MODAL } from '../actions/types'
import LaneToolbar from '../components/Lane/LaneToolbar'
import { showModal } from '../actions/ModalActions'
import { laneDeleted } from '../actions/LaneToolbarActions'

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
    this.props.showModal({
      modalType: ADD_STORY_MODAL,
      modalProps: {
        modalTitle: 'Create new story',
        laneId: this.props.laneId
      }
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

export default connect(null, { laneDeleted, showModal })(LaneToolbarContainer)
