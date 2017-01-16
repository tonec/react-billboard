import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import cx from 'classnames'
import LayeredComponentHOC from './LayeredComponentHOC'

import { closeModal } from '../../actions/BoardActions'

class Modal extends Component {

  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.props.closeModal()
  }

  render () {

    return (
      <div className='modal'>
        <div className='modal-header'>
          <button
            className={cx('btn', 'btn-danger', 'pull-right')}
            onClick={this.handleClick}
          >X</button>
        </div>
        <div className='modal-content'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default compose(
  LayeredComponentHOC,
  connect(undefined, { closeModal })
)(Modal)
