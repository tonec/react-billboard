import {
  ENABLE_LANE_EDIT,
  FINISH_LANE_EDIT,
  STORY_DROPPED
} from './types'

export const enableLaneEdit = (laneId) => {
  return {
    type: ENABLE_LANE_EDIT,
    payload: { laneId }
  }
}

export const finishLaneEdit = (updatedLane) => {
  return {
    type: FINISH_LANE_EDIT,
    payload: updatedLane
  }
}

export const storyDropped = (droppedItem) => {
  return {
    type: STORY_DROPPED,
    payload: droppedItem
  }
}
