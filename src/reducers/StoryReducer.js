import { Map, fromJS } from 'immutable'

import {
  SAVE_STORY
} from '../actions/types'

const INITIAL_STATE = fromJS({
  '1': {
    id: '1',
    title: 'Story 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  '2': {
    id: '2',
    title: 'Story 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  '3': {
    id: '3',
    title: 'Story 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
})

const StoryReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action
  switch (action.type) {

    case SAVE_STORY:
      return state.set(payload.id, Map(payload))

    default:
      return state
  }
}

export default StoryReducer
