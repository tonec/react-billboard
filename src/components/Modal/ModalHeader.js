import React, { PropTypes } from 'react'

const ModalHeader = (props) => {
  return (
    <div className='modal-header'>
      <button type='button' className='close' aria-label='Close'
        onClick={props.handleClose}
      >X</button>
      <h4 className='modal-title'>{props.modal.modalProps.title}</h4>
    </div>
  )
}

ModalHeader.propTypes = {
  modal: PropTypes.object,
  handleClose: PropTypes.func.isRequired
}

export default ModalHeader
