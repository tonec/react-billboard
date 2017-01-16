import {
  ADD_LANE,
  CLOSE_MODAL,
  FETCH_LANES_START,
  FETCH_LANES_SUCCESS,
  FETCH_LANES_FAILURE
} from './types'

export const laneAdded = (id) => {
  return {
    type: ADD_LANE,
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

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  }
}
