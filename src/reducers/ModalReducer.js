import { Map, fromJS } from 'immutable'
import {
  SHOW_MODAL,
  HIDE_MODAL
} from '../actions/types'

const INITIAL_STATE = fromJS({
  modalType: null,
  modalProps: {
    title: ''
  }
})

const ModalReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
      case SHOW_MODAL:
        return state.set('modalType', action.modalType)
          .set('modalProps', Map(action.modalProps))

      case HIDE_MODAL:
        return INITIAL_STATE

      default:
        return state
  }
}

export default ModalReducer
