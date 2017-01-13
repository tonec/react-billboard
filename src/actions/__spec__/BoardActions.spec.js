import { expect } from 'chai'
import { laneAdded } from '../BoardActions'
import {
  ADD_LANE
} from '../types'

describe('BoardActions', () => {

  it('should create an action to add a lane', () => {
    const id = 22
    const expectedAction = {
      type: ADD_LANE,
      payload: id
    }
    expect(laneAdded(id)).to.deep.equal(expectedAction)
  })

})
