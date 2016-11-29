import React, { Component } from 'react'
import { connect } from 'react-redux'

class BoardContainer extends Component {
  render () {
    console.log(this.props)
    return (
      <div>BoardContainer</div>
    )
  }
}

const mapStateToProps = ({ board }) => {
  return {
    lanes: board.lanes
  }
}

export default connect(mapStateToProps)(BoardContainer)
