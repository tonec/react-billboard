import { LANE_ADDED } from '../actions/types'

const INITIAL_STATE = {
  lanes: [
    { id: 1, name: 'Lane 1' },
    { id: 2, name: 'Lane 2' },
    { id: 3, name: 'Lane 3' },
    { id: 4, name: 'Lane 4' }
  ]
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

    case LANE_ADDED:
      return { ...state, lanes: state.lanes.concat(action.payload) }

    default:
      return state
  }
}
