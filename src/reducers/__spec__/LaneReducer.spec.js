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

  it('should handle ADD_LANE', () => {
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

  it('should handle DELETE_LANE', () => {
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

  it('should handle ENABLE_LANE_EDIT', () => {
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

  it('should handle FINISH_LANE_EDIT', () => {
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

  it('should handle SAVE_STORY', () => {
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

  it('should handle STORY_DROPPED with a new lane id correctly', () => {
    const action = {
      type: 'STORY_DROPPED',
      payload: {
        newLaneId: '2',
        storyId: '123'
      }
    }
    const initialState = {
      'byId': {
        '1': { id: '1', name: 'Lane 1', editing: false, storyIds: ['123'] },
        '2': { id: '2', name: 'Lane 2', editing: false, storyIds: [] }
      }
    }
    const expectedState = {
      'byId': {
        '1': { id: '1', name: 'Lane 1', editing: false, storyIds: [] },
        '2': { id: '2', name: 'Lane 2', editing: false, storyIds: ['123'] }
      }
    }
    expect(LaneReducer(initialState, action)).to.deep.equal(expectedState)
  })

  it('should handle STORY_DROPPED with the same lane correctly', () => {
    const action = {
      type: 'STORY_DROPPED',
      payload: {
        newLaneId: '1',
        storyId: '123'
      }
    }
    const initialState = {
      'byId': {
        '1': { id: '1', name: 'Lane 1', editing: false, storyIds: ['123'] },
        '2': { id: '2', name: 'Lane 2', editing: false, storyIds: [] }
      }
    }
    expect(LaneReducer(initialState, action)).to.deep.equal(initialState)
  })

})
