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
    let ModalContentToRender

    if (!this.props.modal.modalType) {
      return null
    }

    ModalContentToRender = MODAL_COMPONENTS[this.props.modal.modalType]

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
                <ModalContentToRender />
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
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
