import { combineReducers } from 'redux'

import {
  SAVE_STORY,
  FETCH_STORIES,
  FETCH_STORIES_SUCCESS,
  FETCH_STORIES_FAILURE
} from '../actions/types'

const INITIAL_STATE = {
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
}

const storiesById = (state = INITIAL_STATE, action) => {
  const { payload } = action

  switch (action.type) {

    case SAVE_STORY:
      return {
        ...state,
        [payload.id]: payload
      }

    case FETCH_STORIES:
      return { ...state }

    case FETCH_STORIES_SUCCESS:
      return { ...state }

    case FETCH_STORIES_FAILURE:
      return { ...state }

    default:
      return state
  }
}

const StoryReducer = combineReducers({
  byId: storiesById,
  allIds: []
})

export default StoryReducer
