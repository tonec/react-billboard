import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { hideModal } from '../../actions/ModalActions'
import LayeredComponentHOC from './LayeredComponentHOC'

import { ADD_STORY_MODAL } from '../../actions/types'

import AddStoryModal from './AddStoryModal'

const MODAL_COMPONENTS = {
  [ADD_STORY_MODAL]: AddStoryModal
}

class Modal extends Component {

  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.props.hideModal()
  }

  render () {
    let ModalToRender

    if (!this.props.modal.modalType) {
      return null
    }

    ModalToRender = MODAL_COMPONENTS[this.props.modal.modalType]

    return (
      <div>

        <div className='modal-backdrop'></div>

        <div className='modal' tabIndex='-1' role='dialog'>
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>

              <div className='modal-header'>
                <button
                  className='close'
                  onClick={this.handleClick}
                  aria-label='Close'
                >X</button>

                <h4 className="modal-title">{this.props.modal.modalProps.title}</h4>

              </div>

              <div className="modal-body">
                <ModalToRender />
              </div>

              <div className="modal-footer">

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ modal }) => {
  return {
    modal
  }
}

export default compose(
  LayeredComponentHOC,
  connect(mapStateToProps, { hideModal })
)(Modal)
