import React, { Component, PropTypes } from 'react'
import LaneContainer from '../../containers/LaneContainer'
import Modal from '../../components/Modal/Modal'

class Board extends Component {

  renderModal () {
    if (this.props.addStoryModal && this.props.addStoryModal.open) {
      return (
        <Modal>
          <h1>Modalllll</h1>
        </Modal>
      )
    }
    return null
  }

  render () {
    const { addLane, lanes } = this.props

    return (
      <div className='board'>

        <div className='board-header'>
          <button
            className='btn btn-primary'
            onClick={addLane}
          >Add lane</button>
        </div>

        <div className='board-body'>
          {lanes.map(lane => {
            return (
              <LaneContainer
                key={lane.id}
                laneId={lane.id}
                name={lane.name}
                editing={lane.editing}
                storyIds={lane.storyIds}
              />
            )
          })}
        </div>

        {this.renderModal()}

      </div>
    )
  }
}

Board.propTypes = {
  addLane: PropTypes.func.isRequired
}

export default Board
