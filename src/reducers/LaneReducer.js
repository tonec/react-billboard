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
     'storyIds': [ '1', '2', '3' ]
  },
  '2': {
     'id': '2',
     'name': 'Lane 2',
     'editing': false,
     'storyIds': []
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
      const stateObject = state.toJS()
      let draggedStoryPrevLane

      // Get the current lane
      for (var item in stateObject) {
        if (stateObject[item].storyIds.indexOf(payload.draggedStoryId) !== -1) {
          draggedStoryPrevLane = stateObject[item]
        }
      }

      // Get the stories order index of the story within the previous lane
      const draggedStoryIndexInPrevLane = stateObject[draggedStoryPrevLane.id].storyIds.indexOf(payload.draggedStoryId)

      // Get the drop target index. If it's not being dropped in the same lane this will be -1
      const targetStoryIndexInPrevLane = stateObject[draggedStoryPrevLane.id].storyIds.indexOf(payload.dropTargetId)

      // Get the order index of the lane being dropped into. Will be -1 if dropped at the top or lane is empty
      const targetStoryIndexNewLane = stateObject[payload.newLaneId].storyIds.indexOf(payload.dropTargetId)

      // No lane change rearrange the stories in the currentLane
      if (draggedStoryPrevLane.id === payload.newLaneId) {

        // Is the new position is directly above return with no changes
        if (draggedStoryIndexInPrevLane - 1 === targetStoryIndexInPrevLane) {
          return state
        }

        // Rearrange the storyIds array to reflect the new order
        return state.updateIn([payload.newLaneId, 'storyIds'], storyIds => {
          let index = 0
          if (targetStoryIndexInPrevLane >= 0) {
            index = targetStoryIndexInPrevLane
          }
          return storyIds.remove(draggedStoryIndexInPrevLane).insert(index, payload.draggedStoryId)
        })

      } else {

        return state.updateIn([draggedStoryPrevLane.id, 'storyIds'], storyIds => storyIds.remove(draggedStoryIndexInPrevLane))
          .updateIn([payload.newLaneId, 'storyIds'], storyIds => {
            let index = 0
            if (targetStoryIndexNewLane >= 0) {
              index = targetStoryIndexNewLane + 1
            }
            return storyIds.insert(index, payload.draggedStoryId)
          })
      }

    default:
      return state
  }
}

export default LaneReducer
