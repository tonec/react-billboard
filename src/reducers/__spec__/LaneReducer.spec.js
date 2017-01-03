import { expect } from 'chai'
import {
  STORY_ADDED
} from '../../actions/types'
import LaneReducer from '../LaneReducer'

describe('Lane Reducer', () => {

  let initialState

  beforeEach(() => {
    initialState = {
      stories: [
        { id: '1', title: 'Story 1', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { id: '2', title: 'Story 2', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { id: '3', title: 'Story 3', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
      ]
    }
  })

  it('should return the initial state', () => {
    expect(LaneReducer(undefined, {})).to.deep.equal(initialState)
  })

  it('should handle a story being added', () => {
    const action = {
      type: STORY_ADDED,
      payload: {
        id: '111',
        title: 'New title'
      }
    }
    const expectedState = {
      stories: [
        { id: '1', title: 'Story 1', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { id: '2', title: 'Story 2', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { id: '3', title: 'Story 3', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { id: '111', title: 'New title' }
      ]
    }
    expect(LaneReducer(initialState, action)).to.deep.equal(expectedState)
  })

})
