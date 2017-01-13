import { DELETE_LANE, STORY_ADDED } from './types'

export const laneDeleted = (id) => {
  return {
    type: DELETE_LANE,
    payload: id
  }
}

export const storyAdded = (addedStory) => {
  return {
    type: STORY_ADDED,
    payload: addedStory
  }
}
