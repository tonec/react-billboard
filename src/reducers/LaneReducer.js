import { Map, fromJS } from 'immutable'

import {
  ADD_LANE,
  DELETE_LANE,
  ENABLE_LANE_EDIT,
  FINISH_LANE_EDIT,
  SAVE_STORY,
  STORY_DROPPED
} from '../actions/types'

const INITIAL_STATE = fromJS({
  '1': {
     'id': '1',
     'name': 'Lane 1',
     'editing': false,
     'storyIds': [ '1', '2' ]
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
})

const LaneReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action

  switch (action.type) {

    case ADD_LANE:
      return state.set(payload.id, Map(payload))

    case DELETE_LANE:
      return state.delete(payload)

    case ENABLE_LANE_EDIT:
      return state.updateIn([payload.laneId, 'editing'], editing => true)

    case FINISH_LANE_EDIT:
      return state.updateIn([payload.laneId, 'editing'], editing => false)
        .updateIn([payload.laneId, 'name'], name => payload.name)

    case SAVE_STORY:
      return state.updateIn([payload.laneId, 'storyIds'], storyIds => storyIds.push(payload.id))

    case STORY_DROPPED:

      let currentLane

      // Get the current lane
      for (var item in state) {
        if (state[item].storyIds.indexOf(payload.dragStoryId) !== -1) {
          currentLane = item
        }
      }

      const dragStoryIndexCurrentLane = state[currentLane].storyIds.indexOf(payload.dragStoryId)
      const targetStoryIndexCurrentLane = state[currentLane].storyIds.indexOf(payload.dropTargetId)
      const targetStoryIndexNewLane = state[payload.newLaneId].storyIds.indexOf(payload.dropTargetId)

      // No lane change rearrange the stories in the currentLane
      if (currentLane === payload.newLaneId) {

        // Is the new position is directly above return with no changes
        if (dragStoryIndexCurrentLane - 1 === targetStoryIndexCurrentLane) {
          return { ...state }
        }

        // Remove from current lane and position
        let storyIdsArray = [ ...state[currentLane].storyIds ]
        storyIdsArray.splice(dragStoryIndexCurrentLane, 1)

        // Add in the new position. If the targetIndex is falsy we assume it's the top
        if (targetStoryIndexCurrentLane < 0) {
          storyIdsArray.splice(0, 0, payload.dragStoryId)
        } else {
          storyIdsArray.splice(targetStoryIndexCurrentLane + 1, 0, payload.dragStoryId)
        }

        return state.updateIn([currentLane, 'storyIds'], storyIds => storyIdsArray)
        // return {
        //   ...state,
        //   [currentLane]: {
        //     ...state[currentLane],
        //     storyIds: storyIdsArray
        //   }
        // }

      } else {

        // Remove from current lane and position
        let currentLaneStoryIdsArray = [ ...state[currentLane].storyIds ]
        currentLaneStoryIdsArray.splice(dragStoryIndexCurrentLane, 1)

        //  Add to the stories array for the new lane
        let newLaneStoryIdsArray = [ ...state[payload.newLaneId].storyIds ]

        // Add in the new lane in the new position.
        // If the targetIndex is falsy we assume it's the top
        if (targetStoryIndexNewLane < 0) {
          newLaneStoryIdsArray.splice(0, 0, payload.dragStoryId)
        } else {
          newLaneStoryIdsArray.splice(targetStoryIndexNewLane + 1, 0, payload.dragStoryId)
        }

        // New lane.
        // Remove from the previous lane
        // Add to the new lane, in the correct position
        return {
          ...state,
          [currentLane]: {
            ...state[currentLane],
            storyIds: currentLaneStoryIdsArray
          },
          [payload.newLaneId]: {
            ...state[payload.newLaneId],
            storyIds: newLaneStoryIdsArray
          }
        }
      }

    default:
      return state
  }
}

export default LaneReducer
