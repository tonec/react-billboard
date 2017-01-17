import React, { PropTypes } from 'react'
import cx from 'classnames'

const ModalFooter = (props) => {
  const { modalProps } = props.modal

  return (
    <div className='modal-footer'>
      <button
        type='button' className={cx('btn', 'btn-secondary')} data-dismiss='modal'
        onClick={props.handleClose}
      >Close</button>
      <button
        type='button'
        className={cx('btn', 'btn-primary')}
        onClick={props.handleSubmit}
      >
        {modalProps.submitBtnText}
      </button>
    </div>
  )
}

ModalFooter.propTypes = {
  handleClose: PropTypes.func.isRequired
}

export default ModalFooter
