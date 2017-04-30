import React, { Component, PropTypes } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { hideModal } from '../actions/ModalActions'
import LayeredComponentHOC from '../components/Modal/LayeredComponentHOC'

import { ADD_STORY_MODAL } from '../actions/types'

import Modal from '../components/Modal/Modal'
import AddStoryModalContainer from '../containers/AddStoryModalContainer'

const MODAL_COMPONENTS = {
  [ADD_STORY_MODAL]: AddStoryModalContainer
}

class ModalContainer extends Component {

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
      <Modal
        modal={modal}
        handleClose={this.handleClose}
        handleUpdate={this.handleUpdate}
      >
        <ModalContentToRender { ...this.props } />
      </Modal>

    )
  }
}

ModalContainer.propTypes = {
  modal: PropTypes.shape({
    modalType: PropTypes.string,
    modalProps: PropTypes.shape({
      title: PropTypes.string
    })
  })
}

const mapStateToProps = ({ modal }) => {
  return {
    modal: modal.toJS()
  }
}

export default compose(
  LayeredComponentHOC,
  connect(mapStateToProps)
)(ModalContainer)
