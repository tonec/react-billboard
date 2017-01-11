import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import uuid from 'uuid'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import { laneAdded } from '../actions/BoardActions'
import Board from '../components/Board/Board'

export class BoardContainer extends Component {

  constructor (props) {
    super(props)

    this.onAddLane = this.onAddLane.bind(this)
  }

  onAddLane () {
    this.props.laneAdded({
      id: uuid.v4(),
      name: 'New lane',
      storyIds: []
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

const mapStateToProps = ({ lane }) => {
  return {
    lanes: lane.lanes
  }
}

export default compose(
  DragDropContext(HTML5Backend),
  connect(mapStateToProps, { laneAdded })
)(BoardContainer)
