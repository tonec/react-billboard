import { STORY_ADDED } from '../actions/types'

const INITIAL_STATE = {
  stories: [
    { id: '1', title: 'Story 1' },
    { id: '2', title: 'Story 2' },
    { id: '3', title: 'Story 3' }
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
