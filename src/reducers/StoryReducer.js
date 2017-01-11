import {
  STORY_ADDED,
  FETCH_STORIES,
  FETCH_STORIES_SUCCESS,
  FETCH_STORIES_FAILURE
} from '../actions/types'

const INITIAL_STATE = {
  stories: [
    { id: '1', title: 'Story 1', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: '2', title: 'Story 2', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: '3', title: 'Story 3', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
  ]
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

    case STORY_ADDED:
      return { ...state, stories: state.stories.concat(action.payload) }

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
