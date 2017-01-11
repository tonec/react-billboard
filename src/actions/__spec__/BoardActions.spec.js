import { expect } from 'chai'
import { laneAdded } from '../BoardActions'
import {
  LANE_ADDED,
  FETCH_LANES,
  FETCH_LANES_SUCCESS,
  FETCH_LANES_FAILURE
} from '../types'

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
