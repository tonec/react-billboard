import chai, { expect } from 'chai'
import { fromJS } from 'immutable'
import chaiImmutable from 'chai-immutable'

chai.use(chaiImmutable)

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
    initialState = fromJS({
        '1': {
           'id': '1',
           'name': 'Lane 1',
           'editing': false,
           'storyIds': [ '1', '2' ]
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
      })
    })

  it('should return the initial state', () => {
    expect(LaneReducer(initialState, {})).to.deep.equal(initialState)
  })

  it('should handle ADD_LANE', () => {
    const action = {
      type: ADD_LANE,
      payload: { id: '22', name: 'New lane', storyIds: [] }
    }

    expect(LaneReducer(initialState, action)).to.have.property('22')
  })

  it('should handle DELETE_LANE', () => {
    const action = {
      type: DELETE_LANE,
      payload: '1'
    }

    expect(LaneReducer(initialState, action).get('1')).to.equal(undefined)
  })

  it('should handle ENABLE_LANE_EDIT', () => {
    const action = {
      type: ENABLE_LANE_EDIT,
      payload: {
        laneId: '2'
      }
    }

    expect(LaneReducer(initialState, action).getIn(['2', 'editing'])).to.equal(true)
  })

  it('should handle FINISH_LANE_EDIT', () => {
    const action = {
      type: FINISH_LANE_EDIT,
      payload: {
        laneId: '1',
        name: 'New name'
      }
    }

    expect(LaneReducer(initialState, action).getIn(['1', 'editing'])).to.equal(false)
  })

  it('should handle SAVE_STORY', () => {
    const action = {
      type: SAVE_STORY,
      payload: {
        id: '111', title: 'New title', laneId: '1'
      }
    }

    expect(LaneReducer(initialState, action).getIn(['1', 'storyIds'])).to.include('111')
  })

  it('should handle STORY_DROPPED with a new lane id correctly', () => {
    const action = {
      type: 'STORY_DROPPED',
      payload: {
        newLaneId: '2',
        draggedStoryId: '2',
        dropTargetId: '3'
      }
    }

    expect(LaneReducer(initialState, action).getIn(['1', 'storyIds']).includes('2')).to.equal(false)
    expect(LaneReducer(initialState, action).getIn(['2', 'storyIds'])).to.include('2')
  })

  it('should handle STORY_DROPPED with the same lane correctly', () => {
    const action = {
      type: 'STORY_DROPPED',
      payload: {
        newLaneId: '1',
        draggedStoryId: '2',
        dropTargetId: '1'
      }
    }

    expect(LaneReducer(initialState, action).getIn(['1', 'storyIds'])).to.include('2')
    expect(LaneReducer(initialState, action).getIn(['2', 'storyIds']).includes('2')).to.equal(false)

  })

})
