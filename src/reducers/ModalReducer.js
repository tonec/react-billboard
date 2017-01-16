import {
  SHOW_MODAL,
  HIDE_MODAL
} from '../actions/types'

const INITIAL_STATE = {
  modalType: null,
  modalProps: {}
}

const ModalReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {

      case SHOW_MODAL:
        return {
          ...state,
          modalType: action.modalType,
          modalProps: action.modalProps
        }

      case HIDE_MODAL:
        return INITIAL_STATE

      default:
        return { ...state }
  }
}

export default ModalReducer
