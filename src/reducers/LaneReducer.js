import { combineReducers } from 'redux'

import {
  ADD_LANE,
  DELETE_LANE,
  ENABLE_LANE_EDIT,
  FINISH_LANE_EDIT,
  SAVE_STORY,
  STORY_DROPPED
} from '../actions/types'

const INITIAL_STATE = {
  '1': {
     'id': '1',
     'name': 'Lane 1',
     'editing': false,
     'storyIds': [ '2' ]
  },
  '2': {
     'id': '2',
     'name': 'Lane 2',
     'editing': false,
     'storyIds': [ '3' ]
  },
  '3': {
     'id': '3',
     'name': 'Lane 3',
     'editing': false,
     'storyIds': []
  }
}

const lanesById = (state = INITIAL_STATE, action) => {
  const { payload } = action

  switch (action.type) {

    case ADD_LANE:
      return { ...state, [payload.id]: payload }

    case DELETE_LANE:
      let newState = Object.assign({}, state)
      delete newState[payload]
      return newState

    case ENABLE_LANE_EDIT:
      return {
        ...state,
        [payload.laneId]: {
          ...state[payload.laneId],
          editing: true
        }
      }

    case FINISH_LANE_EDIT:
      return {
        ...state,
        [payload.laneId]: {
          ...state[payload.laneId],
          name: payload.name,
          editing: false
        }
      }

    case SAVE_STORY:
      return {
        ...state,
        [payload.laneId]: {
          ...state[payload.laneId],
          storyIds: state[payload.laneId].storyIds.concat([payload.id])
        }
      }

    case STORY_DROPPED:
      let currentLane

      for (var item in state) {
        if (state[item].storyIds.indexOf(payload.storyId) !== -1) {
          currentLane = item
        }
      }

      // No lane change so return with no state change
      if (currentLane === payload.newLaneId) {
        return { ...state }
      }

      return {
        ...state,
        [currentLane]: {
          ...state[currentLane],
          storyIds: state[currentLane].storyIds.filter(id => id !== payload.storyId)
        },
        [payload.newLaneId]: {
          ...state[payload.newLaneId],
          storyIds: state[payload.newLaneId].storyIds.concat(payload.storyId)
        }
      }

    default:
      return state
  }
}

const LaneReducer = combineReducers({
  byId: lanesById,
  allIds: []
})

export default LaneReducer
