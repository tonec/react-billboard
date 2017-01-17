import { expect } from 'chai'
import {
  ADD_LANE,
  DELETE_LANE,
  ENABLE_LANE_EDIT,
  FINISH_LANE_EDIT,
  SAVE_STORY
} from '../../actions/types'
import LaneReducer from '../LaneReducer'

describe('LaneReducer', () => {

  let initialState

  beforeEach(() => {
    initialState = {
      'byId': {
        '1': {
           'id': '1',
           'name': 'Lane 1',
           'editing': false,
           'storyIds': [ '2' ]
        },
        '2': {
           'id': '2',
           'name': 'Lane 2',
           'editing': false,
           'storyIds': [ '3' ]
        },
        '3': {
           'id': '3',
           'name': 'Lane 3',
           'editing': false,
           'storyIds': []
        }
      }
    }
  })

  it('should return the initial state', () => {
    expect(LaneReducer(undefined, {})).to.deep.equal(initialState)
  })

  it('should handle lane addition', () => {
    const action = {
      type: ADD_LANE,
      payload: { id: '22', name: 'New lane', storyIds: [] }
    }
    const expectedState = {
      'byId': {
        '1': {
           'id': '1',
           'name': 'Lane 1',
           'editing': false,
           'storyIds': [ '2' ]
        },
        '2': {
           'id': '2',
           'name': 'Lane 2',
           'editing': false,
           'storyIds': [ '3' ]
        },
        '3': {
           'id': '3',
           'name': 'Lane 3',
           'editing': false,
           'storyIds': []
        },
        '22': {
          'id': '22',
          'name': 'New lane',
          'storyIds': []
        }
      }
    }

    expect(LaneReducer({}, action)).to.deep.equal(expectedState)
  })

  it('should handle lane deletion', () => {
    const action = {
      type: DELETE_LANE,
      payload: '1'
    }
    const expectedState = {
      'byId': {
        '2': {
           'id': '2',
           'name': 'Lane 2',
           'editing': false,
           'storyIds': [ '3' ]
        },
        '3': {
           'id': '3',
           'name': 'Lane 3',
           'editing': false,
           'storyIds': []
        }
      }
    }
    expect(LaneReducer(initialState, action)).to.deep.equal(expectedState)
  })

  it('should handle enable lane editing', () => {
    const action = {
      type: ENABLE_LANE_EDIT,
      payload: {
        laneId: '2'
      }
    }
    const expectedState = {
      'byId': {
        '1': {
           'id': '1',
           'name': 'Lane 1',
           'editing': false,
           'storyIds': [ '2' ]
        },
        '2': {
           'id': '2',
           'name': 'Lane 2',
           'editing': true,
           'storyIds': [ '3' ]
        },
        '3': {
           'id': '3',
           'name': 'Lane 3',
           'editing': false,
           'storyIds': []
        }
      }
    }
    expect(LaneReducer(initialState, action)).to.deep.equal(expectedState)
  })

  it('should handle finish lane editing', () => {
    const action = {
      type: FINISH_LANE_EDIT,
      payload: {
        laneId: '1',
        name: 'New name'
      }
    }
    const initialState = {
      'byId': {
        '1': {
           'id': '1',
           'name': 'Lane 1',
           'editing': true,
           'storyIds': [ '2' ]
        }
      }
    }
    const expectedState = {
      'byId': {
        '1': {
           'id': '1',
           'name': 'New name',
           'editing': false,
           'storyIds': [ '2' ]
        }
      }
    }
    expect(LaneReducer(initialState, action)).to.deep.equal(expectedState)
  })

  it('should handle story added', () => {
    const action = {
      type: SAVE_STORY,
      payload: {
        id: '111', title: 'New title', laneId: '1'
      }
    }
    const initialState = {
      'byId': {
        '1': { id: '1', name: 'Lane 1', editing: false, storyIds: ['1', '2'] }
      }
    }
    const expectedState = {
      'byId': {
        '1': { id: '1', name: 'Lane 1', editing: false, storyIds: ['1', '2', '111'] }
      }
    }
    expect(LaneReducer(initialState, action)).to.deep.equal(expectedState)
  })

})
