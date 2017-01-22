import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import uuid from 'uuid'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import { addLaneAction } from '../actions/BoardActions'
import Board from '../components/Board/Board'

class BoardContainer extends Component {

  constructor (props) {
    super(props)

    this.onAddLane = this.onAddLane.bind(this)
  }

  onAddLane () {
    this.props.addLaneAction({
      id: uuid.v4(),
      name: 'New lane',
      storyIds: []
    })
  }

  render () {
    return (
      <Board
        { ...this.props }
        addLane={this.onAddLane}
      />
    )
  }
}

const mapStateToProps = ({ modal, lane }) => {
  return {
    modal: modal,
    lanes: stackedLanesSelector(lane.byId)
  }
}

function stackedLanesSelector (lanesById) {
  const lanes = Object.keys(lanesById).map(id => lanesById[id])
  return lanes
}

export { BoardContainer }
export default compose(
  DragDropContext(HTML5Backend),
  connect(mapStateToProps, { addLaneAction })
)(BoardContainer)
