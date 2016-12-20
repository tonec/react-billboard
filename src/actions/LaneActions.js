import {
  ENABLE_LANE_EDIT,
  FINISH_LANE_EDIT
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
