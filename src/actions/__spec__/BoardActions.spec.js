import { expect } from 'chai'
import { laneAdded } from '../BoardActions'
import { LANE_ADDED } from '../types'

describe('BoardActions', () => {

  it('should create an action to add a lane', () => {
    const id = 22
    const expectedAction = {
      type: LANE_ADDED,
      payload: id
    }
    expect(laneAdded(id)).to.deep.equal(expectedAction)
  })

})
