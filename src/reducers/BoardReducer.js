import {
  LANE_ADDED,
  LANE_DELETED,
  STORY_ADDED
} from '../actions/types'

const INITIAL_STATE = {
  lanes: [
    { id: '1', name: 'Lane 1', storyIds: ['1', '2'] },
    { id: '2', name: 'Lane 2', storyIds: ['3'] },
    { id: '3', name: 'Lane 3', storyIds: [] },
    { id: '4', name: 'Lane 4', storyIds: [] }
  ]
}

export default (state = INITIAL_STATE, action) => {
  // console.log('BoardReducer', state)
  // console.log('BoardReducer', action)

  switch (action.type) {

    case LANE_ADDED:
      return { ...state, lanes: state.lanes.concat(action.payload) }

    case LANE_DELETED:
      return { ...state, lanes: state.lanes.filter(lane => lane.id !== action.payload) }

    case STORY_ADDED:
      return { ...state,
        lanes: state.lanes.map(lane => {
          if (lane.id === action.payload.laneId) {
            lane.storyIds = lane.storyIds.concat([action.payload.id])
          }
          return lane
        })
      }

    default:
      return state
  }
}
