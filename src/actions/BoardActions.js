import {
  LANE_ADDED,
  FETCH_LANES_START,
  FETCH_LANES_SUCCESS,
  FETCH_LANES_FAILURE
} from './types'

export const laneAdded = (id) => {
  return {
    type: LANE_ADDED,
    payload: id
  }
}

export const fetchBoardData = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_LANES_START })
  }
}

export const fetchBoardSuccess = (data) => {
  return {
    type: FETCH_LANES_SUCCESS,
    payload: data
  }
}

export const fetchBoardFailure = (error) => {
  return {
    type: FETCH_LANES_FAILURE,
    payload: error
  }

}
