import { combineReducers } from 'redux'
import BoardReducer from './BoardReducer'
import LaneReducer from './LaneReducer'
import StoryReducer from './StoryReducer'

export default combineReducers({
  board: BoardReducer,
  lane: LaneReducer,
  story: StoryReducer
})
