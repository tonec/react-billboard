import { STORY_ADDED } from './types'

export const storyAdded = (id) => {
  console.log('story added', id)
  return {
    type: STORY_ADDED,
    payload: id
  }
}
