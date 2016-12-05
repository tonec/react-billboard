import { LANE_DELETED, STORY_ADDED } from './types'

export const laneDeleted = (id) => {
  return {
    type: LANE_DELETED,
    payload: id
  }
}

export const storyAdded = (id) => {
  return {
    type: STORY_ADDED,
    payload: id
  }
}
