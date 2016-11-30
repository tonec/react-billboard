import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid'
import { laneAdded } from '../../actions/BoardActions'
import Board from './Board'

class BoardContainer extends Component {

  constructor (props) {
    super(props)

    this.onAddLane = this.onAddLane.bind(this)
  }

  onAddLane () {
    this.props.laneAdded({
      id: uuid.v4(),
      name: 'New lane'
    })
  }

  render () {
    return (
      <Board
        addLane={this.onAddLane}
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

export default connect(mapStateToProps, { laneAdded })(BoardContainer)
