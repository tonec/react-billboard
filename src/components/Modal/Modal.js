import React, { Component, PropTypes } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import cx from 'classnames'
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

    return (
      <div>

        <div className='modal-backdrop'></div>

        <div className='modal' tabIndex='-1' role='dialog'>
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>

              <div className='modal-header'>
                <button type='button' className='close' aria-label='Close'
                  onClick={this.handleClose}
                >X</button>
                <h4 className='modal-title'>{modal.modalProps.title}</h4>
              </div>

              <div className='modal-body'>
                <ModalContentToRender { ...modal }/>
              </div>

              <div className='modal-footer'>
                <button
                  type='button' className={cx('btn', 'btn-secondary')} data-dismiss='modal'
                  onClick={this.handleClose}
                >Close</button>
                <button type='button' className={cx('btn', 'btn-primary')}>Save changes</button>
              </div>

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
