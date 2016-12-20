import React, { Component } from 'react'
import { connect } from 'react-redux'
import { enableLaneEdit, finishLaneEdit } from '../../actions/LaneActions'
import Lane from './Lane'

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
    return (
      <Lane
        key={this.props.id}
        { ...this.props }
        handleClick={this.handleEnableEditing}
        handleKeyPress={this.checkForReturn}
        stories={this.selectStoriesById(this.props.storyIds, this.props.stories)}
      />
    )
  }
}

const mapStateToProps = ({ lane }) => {
  return {
    stories: lane.stories
  }
}

export default connect(mapStateToProps, { enableLaneEdit, finishLaneEdit })(LaneContainer)
