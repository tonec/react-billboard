import React from 'react'
import ModalHeader from './ModalHeader'

const Modal = (props) => {
  const { modal } = props

  return (
    <div>
      <div className='modal-backdrop'></div>

      <div className='modal' tabIndex='-1' role='dialog'>
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>

            <ModalHeader { ...props } modal={modal} />

            <div className='modal-body'>
              {props.children}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
