import { combineReducers } from 'redux'
import BoardReducer from './BoardReducer'
import LaneReducer from './LaneReducer'
import StoryReducer from './StoryReducer'

const rootReducer = combineReducers({
  board: BoardReducer,
  lane: LaneReducer,
  story: StoryReducer
})

export default rootReducer
