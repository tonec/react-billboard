import { expect } from 'chai'
import { laneDeleted, storyAdded } from '../LaneToolbarActions'
import { DELETE_LANE, STORY_ADDED } from '../types'

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
      type: STORY_ADDED,
      payload: id
    }
    expect(storyAdded(id)).to.deep.equal(expectedAction)
  })

})
