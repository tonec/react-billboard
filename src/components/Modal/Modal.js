import React, { Component, PropTypes } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { hideModal } from '../../actions/ModalActions'
import LayeredComponentHOC from './LayeredComponentHOC'

import { ADD_STORY_MODAL } from '../../actions/types'

import ModalHeader from './ModalHeader'
import ModalFooter from './ModalFooter'
import AddStoryModal from './AddStoryModal'

const MODAL_COMPONENTS = {
  [ADD_STORY_MODAL]: AddStoryModal
}

class Modal extends Component {

  constructor (props) {
    super(props)

    this.handleClose = this.handleClose.bind(this)
  }

  handleClose () {
    this.props.dispatch(hideModal())
  }

  render () {
    const { modal } = this.props
    const ModalContentToRender = MODAL_COMPONENTS[modal.modalType]

    if (!modal.modalType) {
      return null
    }

    let footer

    if (modal.modalProps.hasSubmit) {
      footer = <ModalFooter modal={modal} handleClose={this.handleClose} />
    }

    return (
      <div>

        <div className='modal-backdrop'></div>

        <div className='modal' tabIndex='-1' role='dialog'>
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>

              <ModalHeader modal={modal} handleClose={this.handleClose} />

              <div className='modal-body'>
                <ModalContentToRender modal={modal} />
              </div>

              {footer}

            </div>
          </div>
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  modal: PropTypes.shape({
    modalType: PropTypes.string,
    modalProps: PropTypes.shape({
      title: PropTypes.string,
      hasSubmit: PropTypes.bool,
      submitBtnText: PropTypes.string,
      onSubmitAction: PropTypes.string
    })
  })
}

const mapStateToProps = ({ modal }) => {
  return {
    modal
  }
}

export default compose(
  LayeredComponentHOC,
  connect(mapStateToProps)
)(Modal)
