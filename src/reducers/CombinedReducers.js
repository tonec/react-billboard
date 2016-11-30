import { combineReducers } from 'redux'
import BoardReducer from './BoardReducer'
import LaneReducer from './LaneReducer'

export default combineReducers({
  board: BoardReducer,
  lane: LaneReducer
})
