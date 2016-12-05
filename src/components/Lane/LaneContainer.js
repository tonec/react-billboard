import React, { Component } from 'react'
import { connect } from 'react-redux'
import Lane from './Lane'

class LaneContainer extends Component {

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

export default connect(mapStateToProps)(LaneContainer)
