import { LANE_DELETED, STORY_ADDED } from './types'

export const laneDeleted = (id) => {
  console.log('action deleteLane', id)
  return {
    type: LANE_DELETED,
    payload: id
  }
}

export const storyAdded = (id) => {
  console.log('story added', id)
  return {
    type: STORY_ADDED,
    payload: id
  }
}
