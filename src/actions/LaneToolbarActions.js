import {
  DELETE_LANE,
  ADD_STORY,
  STORY_ADDED
} from './types'

export const laneDeleted = (id) => {
  return {
    type: DELETE_LANE,
    payload: id
  }
}

export const addStory = (laneId) => {
  return {
    type: ADD_STORY,
    payload: laneId
  }
}

export const newStoryAdded = (newStory) => {
  return {
    type: STORY_ADDED,
    payload: newStory
  }
}
