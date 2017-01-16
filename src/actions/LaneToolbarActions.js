import {
  DELETE_LANE
} from './types'

export const laneDeleted = (id) => {
  return {
    type: DELETE_LANE,
    payload: id
  }
}
