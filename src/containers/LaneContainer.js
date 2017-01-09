import React, { Component, PropTypes } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { DropTarget } from 'react-dnd'
import ItemTypes from '../constants/ItemTypes'
import { enableLaneEdit, finishLaneEdit } from '../actions/LaneActions'
import Lane from '../components/Lane/Lane'

const laneTarget = {
  drop (props, monitor) {
    console.log(props)
    console.log(monitor)
    // moveStory (props.id)
  }
}

function collect (connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
}

class LaneContainer extends Component {

  constructor (props) {
    super(props)

    this.handleEnableEditing = this.handleEnableEditing.bind(this)
    this.checkForReturn = this.checkForReturn.bind(this)
  }

  handleEnableEditing (laneId) {
    this.props.enableLaneEdit(laneId)
  }

  checkForReturn (e) {
    if (e.key === 'Enter') {
      this.props.finishLaneEdit({
        laneId: this.props.laneId,
        name: e.target.value
      })
    }
  }

  selectStoriesById (storyIds, allStories) {
    return storyIds.reduce((storiesArray, storyId) => {
      return storiesArray.concat(
        allStories.filter(story => story.id === storyId)
      )
    }, [])
  }

  render () {
    const { connectDropTarget, isOver } = this.props

    return connectDropTarget(
      <div style={{ border: isOver ? '1px solid red' : 'none' }}>
        <Lane
          { ...this.props }
          key={this.props.laneId}
          handleClick={this.handleEnableEditing}
          handleKeyPress={this.checkForReturn}
          stories={this.selectStoriesById(this.props.storyIds, this.props.stories)}
        />
      </div>
    )
  }
}

LaneContainer.propTypes = {
  laneId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  editing: PropTypes.bool,
  storyIds: PropTypes.array
}

const mapStateToProps = ({ lane }) => {
  return {
    stories: lane.stories
  }
}

export default compose(
  DropTarget(ItemTypes.STORY, laneTarget, collect),
  connect(mapStateToProps, { enableLaneEdit, finishLaneEdit })
)(LaneContainer)
