import { combineReducers } from 'redux'
import ModalReducer from './ModalReducer'
import LaneReducer from './LaneReducer'
import StoryReducer from './StoryReducer'

const rootReducer = combineReducers({
  modal: ModalReducer,
  lane: LaneReducer,
  story: StoryReducer
})

export default rootReducer
