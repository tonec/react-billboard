import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { enableLaneEdit, finishLaneEdit } from '../actions/LaneActions'
import Lane from '../components/Lane/Lane'

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
        { ...this.props }
        key={this.props.laneId}
        handleClick={this.handleEnableEditing}
        handleKeyPress={this.checkForReturn}
        stories={this.selectStoriesById(this.props.storyIds, this.props.stories)}
      />
    )
  }
}

LaneContainer.propTypes = {
  laneId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  editing: PropTypes.bool,
  storyIds: PropTypes.array
}

const mapStateToProps = ({ story }) => {
  return {
    stories: stackedStorySelector(story.byId)
  }
}

function stackedStorySelector (storiesById) {
  const lanes = Object.keys(storiesById).map(id => storiesById[id])
  return lanes
}

export default connect(mapStateToProps, { enableLaneEdit, finishLaneEdit })(LaneContainer)
