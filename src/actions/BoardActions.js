import {
  ADD_LANE
} from './types'

export const addLaneAction = (newLane) => {
  return {
    type: ADD_LANE,
    payload: newLane
  }
}
