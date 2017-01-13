import { expect } from 'chai'
import {
  STORY_ADDED
} from '../../actions/types'
import StoryReducer from '../StoryReducer'

describe('StoryReducer', () => {

  let initialState

  beforeEach(() => {
    initialState = {
      byId: {
        '1': { id: '1', title: 'Story 1', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        '2': { id: '2', title: 'Story 2', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        '3': { id: '3', title: 'Story 3', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
      }
    }
  })

  it('should return the initial state', () => {
    expect(StoryReducer(undefined, {})).to.deep.equal(initialState)
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
      byId: {
        '1': { id: '1', title: 'Story 1', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        '2': { id: '2', title: 'Story 2', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        '3': { id: '3', title: 'Story 3', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        '111': { id: '111', title: 'New title' }
      }
    }
    expect(StoryReducer(initialState, action)).to.deep.equal(expectedState)
  })

})
