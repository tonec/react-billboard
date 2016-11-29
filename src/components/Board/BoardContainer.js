import React, { Component } from 'react'
import { connect } from 'react-redux'
import Board from './Board'

class BoardContainer extends Component {

  constructor (props) {
    super(props)

    this.addLane = this.addLane.bind(this)
  }

  addLane () {
    console.log('addlane')
  }

  render () {
    return (
      <Board
        addLane={this.addLane}
        { ...this.props }
      />
    )
  }
}

const mapStateToProps = ({ board }) => {
  return {
    lanes: board.lanes
  }
}

export default connect(mapStateToProps)(BoardContainer)
