import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
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
        onClick={() => {
          props.dispatch({
            type: modalProps.onSubmitAction
          })
        }}
      >
        {modalProps.submitBtnText}
      </button>
    </div>
  )
}

ModalFooter.propTypes = {
  handleClose: PropTypes.func.isRequired
}

export default connect()(ModalFooter)
