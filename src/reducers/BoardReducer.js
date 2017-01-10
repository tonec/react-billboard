import {
  LANE_ADDED,
  LANE_DELETED,
  ENABLE_LANE_EDIT,
  FINISH_LANE_EDIT,
  STORY_ADDED,
  STORY_DROPPED
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
  console.log('BoardReducer', state)
  console.log('BoardReducer', action)

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
      return {
        ...state,
        lanes: state.lanes.map(lane => {
          // Find the dropped story's current lane
          if (lane.storyIds.indexOf(action.payload.storyId) !== -1) {
            // Compare it to the new lane to confirm it differs
            if (lane.id !== action.payload.newLaneId) {
              // Remove from previous lane
              lane.storyIds = lane.storyIds.filter(id => id !== action.payload.storyId)
            }
          }
          // Add the story to the new lane 
          if (lane.id === action.payload.newLaneId) {
            lane.storyIds = lane.storyIds.concat(action.payload.storyId)
          }
          return lane
        })
      }

    default:
      return state
  }
}
