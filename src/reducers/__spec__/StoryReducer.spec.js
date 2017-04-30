import chai, { expect } from 'chai'
import { fromJS } from 'immutable'
import chaiImmutable from 'chai-immutable'
import {
  SAVE_STORY
} from '../../actions/types'
import StoryReducer from '../StoryReducer'

chai.use(chaiImmutable)

describe('StoryReducer', () => {

  let initialState

  beforeEach(() => {
    initialState = fromJS({
      '1': { id: '1', title: 'Story 1', description: 'Story 1 description' },
      '2': { id: '2', title: 'Story 2', description: 'Story 2 description' },
      '3': { id: '3', title: 'Story 3', description: 'Story 3 description' }
    })
  })

  it('should return the initial state', () => {
    expect(StoryReducer(initialState, {})).to.deep.equal(initialState)
  })

  it('should handle a story being added', () => {
    const action = {
      type: SAVE_STORY,
      payload: {
        id: '111',
        title: 'New title',
        description: 'New description'
      }
    }

    expect(StoryReducer(initialState, action)).to.have.property('111')
    expect(StoryReducer(initialState, action).getIn(['111', 'id'])).to.equal('111')
    expect(StoryReducer(initialState, action).getIn(['111', 'title'])).to.equal('New title')
    expect(StoryReducer(initialState, action).getIn(['111', 'description'])).to.equal('New description')
  })

})
