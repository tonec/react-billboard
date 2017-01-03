import { expect } from 'chai'
import { enableLaneEdit, finishLaneEdit } from '../LaneActions'
import { ENABLE_LANE_EDIT, FINISH_LANE_EDIT } from '../types'

describe('LaneActions', () => {

  it('should create an action to add enable lane editing', () => {
    const laneId = 22
    const expectedAction = {
      type: ENABLE_LANE_EDIT,
      payload: { laneId }
    }
    expect(enableLaneEdit(laneId)).to.deep.equal(expectedAction)
  })

  it('should create an action to add finish lane editing', () => {
    const updatedLane = {
      laneId: 22,
      name: 'New lane name'
    }
    const expectedAction = {
      type: FINISH_LANE_EDIT,
      payload: updatedLane
    }
    expect(finishLaneEdit(updatedLane)).to.deep.equal(expectedAction)
  })

})
