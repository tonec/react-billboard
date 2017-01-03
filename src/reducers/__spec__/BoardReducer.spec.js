import { expect } from 'chai'
import {
  LANE_ADDED,
  LANE_DELETED,
  ENABLE_LANE_EDIT,
  FINISH_LANE_EDIT,
  STORY_ADDED
} from '../../actions/types'
import BoardReducer from '../BoardReducer'

describe('Board Reducer', () => {

  let initialState

  beforeEach(() => {
    initialState = {
      lanes: [
        { id: '1', name: 'Lane 1', editing: false, storyIds: ['1', '2'] },
        { id: '2', name: 'Lane 2', editing: false, storyIds: ['3'] },
        { id: '3', name: 'Lane 3', editing: false, storyIds: [] },
        { id: '4', name: 'Lane 4', editing: false, storyIds: [] }
      ]
    }
  })

  it('should return the initial state', () => {
    expect(BoardReducer(undefined, {})).to.deep.equal(initialState)
  })

  it('should handle lane addition', () => {
    const action = {
      type: LANE_ADDED,
      payload: { id: '22', name: 'New lane', storyIds: [] }
    }
    const expectedState = {
      lanes: [
        { id: '22', name: 'New lane', storyIds: [] }
      ]
    }
    expect(BoardReducer({ lanes: [] }, action)).to.deep.equal(expectedState)
  })

  it('should handle lane deletion', () => {
    const action = {
      type: LANE_DELETED,
      payload: '1'
    }
    const expectedState = {
      lanes: [
        { id: '2', name: 'Lane 2', editing: false, storyIds: ['3'] },
        { id: '3', name: 'Lane 3', editing: false, storyIds: [] },
        { id: '4', name: 'Lane 4', editing: false, storyIds: [] }
      ]
    }
    expect(BoardReducer(initialState, action)).to.deep.equal(expectedState)
  })

  it('should handle enable lane editing', () => {
    const action = {
      type: ENABLE_LANE_EDIT,
      payload: {
        laneId: '2'
      }
    }
    const expectedState = {
      lanes: [
        { id: '1', name: 'Lane 1', editing: false, storyIds: ['1', '2'] },
        { id: '2', name: 'Lane 2', editing: true, storyIds: ['3'] },
        { id: '3', name: 'Lane 3', editing: false, storyIds: [] },
        { id: '4', name: 'Lane 4', editing: false, storyIds: [] }
      ]
    }
    expect(BoardReducer(initialState, action)).to.deep.equal(expectedState)
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
      lanes: [
        { id: '1', name: 'Lane 1', editing: true }
      ]
    }
    const expectedState = {
      lanes: [
        { id: '1', name: 'New name', editing: false }
      ]
    }
    expect(BoardReducer(initialState, action)).to.deep.equal(expectedState)
  })

  it('should handle story added', () => {
    const action = {
      type: STORY_ADDED,
      payload: {
        id: '111', title: 'New title', laneId: '1'
      }
    }
    const initialState = {
      lanes: [
        { id: '1', name: 'Lane 1', editing: false, storyIds: ['1', '2'] }
      ]
    }
    const expectedState = {
      lanes: [
        { id: '1', name: 'Lane 1', editing: false, storyIds: ['1', '2', '111'] }
      ]
    }
    expect(BoardReducer(initialState, action)).to.deep.equal(expectedState)
  })

})
