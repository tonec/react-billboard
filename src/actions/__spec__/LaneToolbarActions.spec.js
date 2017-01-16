import { expect } from 'chai'
import { laneDeleted } from '../LaneToolbarActions'
import {
  DELETE_LANE
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

})
