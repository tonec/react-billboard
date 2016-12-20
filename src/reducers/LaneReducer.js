import {
  STORY_ADDED
} from '../actions/types'

const INITIAL_STATE = {
  stories: [
    { id: '1', title: 'Story 1', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: '2', title: 'Story 2', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: '3', title: 'Story 3', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
  ]
}

export default (state = INITIAL_STATE, action) => {
  // console.log('LaneReducer: ', state)
  // console.log('LaneReducer: ', action)

  switch (action.type) {

    case STORY_ADDED:
      return { ...state, stories: state.stories.concat(action.payload) }

    default:
      return state
  }
}
