import React, { Component } from 'react'
import { connect } from 'react-redux'
import Lane from './Lane'

class LaneContainer extends Component {
  render () {
    return (
      <Lane
        key={this.props.id}
        { ...this.props }
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
