import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid'
import { storyAdded } from '../../actions/LaneActions'
import Lane from './Lane'

class LaneContainer extends Component {

  constructor (props) {
    super(props)

    this.onAddStory = this.onAddStory.bind(this)
  }

  onAddStory () {
    this.props.storyAdded({
      id: uuid.v4(),
      title: 'New title'
    })
  }

  render () {
    return (
      <Lane
        key={this.props.id}
        name={this.props.name}
        stories={this.props.stories}
        addStore={this.onAddStory}
      />
    )
  }
}

const mapStateToProps = ({ lane }) => {
  return {
    stories: lane.stories
  }
}

export default connect(mapStateToProps, { storyAdded })(LaneContainer)
