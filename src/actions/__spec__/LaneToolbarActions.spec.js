import { expect } from 'chai'
import { laneDeleted, addStory } from '../LaneToolbarActions'
import {
  DELETE_LANE,
  ADD_STORY
} from '../types'

describe('BoardActions', () => {

  it('should create an action to delete a lane', () => {
    const id = 22
    const expectedAction = {
      type: DELETE_LANE,
      payload: id
    }
    expect(laneDeleted(id)).to.deep.equal(expectedAction)
  })

  it('should create an action to add a story', () => {
    const id = 22
    const expectedAction = {
      type: ADD_STORY,
      payload: id
    }
    expect(addStory(id)).to.deep.equal(expectedAction)
  })

})
