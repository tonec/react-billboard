import {
  SHOW_MODAL,
  HIDE_MODAL
} from './types'

export const showModal = (modal) => {
  return {
    type: SHOW_MODAL,
    modalType: modal.modalType,
    modalProps: modal.modalProps
  }
}

export const hideModal = () => {
  return {
    type: HIDE_MODAL
  }
}
