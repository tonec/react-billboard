import {
  LANE_ADDED,
  LANE_DELETED,
  ENABLE_LANE_EDIT,
  FINISH_LANE_EDIT,
  STORY_ADDED,
  STORY_DROPPED,
  FETCH_LANES,
  FETCH_LANES_SUCCESS,
  FETCH_LANES_FAILURE
} from '../actions/types'

const INITIAL_STATE = {
  lanes: [
    { id: '1', name: 'Lane 1', editing: false, storyIds: ['1', '2'] },
    { id: '2', name: 'Lane 2', editing: false, storyIds: ['3'] },
    { id: '3', name: 'Lane 3', editing: false, storyIds: [] },
    { id: '4', name: 'Lane 4', editing: false, storyIds: [] }
  ]
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

    case LANE_ADDED:
      return { ...state, lanes: state.lanes.concat(action.payload) }

    case LANE_DELETED:
      return { ...state, lanes: state.lanes.filter(lane => lane.id !== action.payload) }

    case ENABLE_LANE_EDIT:
      return {
        ...state,
        lanes: state.lanes.map(lane => {
          if (lane.id === action.payload.laneId) {
            lane.editing = true
          }
          return lane
        })
      }

    case FINISH_LANE_EDIT:
      return {
        ...state,
        lanes: state.lanes.map(lane => {
          if (lane.id === action.payload.laneId) {
            lane.name = action.payload.name
            lane.editing = false
          }
          return lane
        })
      }

    case STORY_ADDED:
      return {
        ...state,
        lanes: state.lanes.map(lane => {
          if (lane.id === action.payload.laneId) {
            lane.storyIds = lane.storyIds.concat([action.payload.id])
          }
          return lane
        })
      }

    case STORY_DROPPED:
      const currentLane = state.lanes.filter(lane => {
        return lane.storyIds.indexOf(action.payload.storyId) !== -1
      })[0]

      // No lane change so return with no state change
      if (currentLane.id === action.payload.newLaneId) {
        return { ...state }
      }

      return {
        ...state,
        lanes: state.lanes.map(lane => {
          if (lane.id !== action.payload.newLaneId) {
            // Remove from the current lane
            lane.storyIds = lane.storyIds.filter(id => id !== action.payload.storyId)
          } else {
            // Add to the new lane
            lane.storyIds = lane.storyIds.concat(action.payload.storyId)
          }
          return lane
        })
      }

      case FETCH_LANES:
        return { ...state }

      case FETCH_LANES_SUCCESS:
        return { ...state }

      case FETCH_LANES_FAILURE:
        return { ...state }

    default:
      return state
  }
}
