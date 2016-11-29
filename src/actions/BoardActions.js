import { LANE_ADDED } from './types'

export const laneAdded = (id) => {
    return {
      type: LANE_ADDED,
      payload: id
    }
}
