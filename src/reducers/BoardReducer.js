import { combineReducers } from 'redux'

import {
  ADD_STORY,
  CLOSE_MODAL
} from '../actions/types'

const INITIAL_STATE = {
  open: true,
  laneId: '1'
}

const addStoryModalReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {

    case ADD_STORY:
      return { ...state, open: true, laneId: action.payload.laneId }

    case CLOSE_MODAL:
      return { ...state, open: false }

    default:
      return { ...state }
  }
}

const BoardReducer = combineReducers({
  addStoryModal: addStoryModalReducer
})

export default BoardReducer
