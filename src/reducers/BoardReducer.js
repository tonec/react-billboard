import { LANE_ADDED, LANE_DELETED } from '../actions/types'

const INITIAL_STATE = {
  lanes: [
    { id: '1', name: 'Lane 1', storyIds: ['1', '2'] },
    { id: '2', name: 'Lane 2', storyIds: ['3'] },
    { id: '3', name: 'Lane 3', storyIds: ['4'] },
    { id: '4', name: 'Lane 4' }
  ]
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

    case LANE_ADDED:
      return { ...state, lanes: state.lanes.concat(action.payload) }

    case LANE_DELETED:
      return { ...state, lanes: state.lanes.filter(lane => lane.id !== action.payload) }

    default:
      return state
  }
}
