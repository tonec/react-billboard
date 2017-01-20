import { expect } from 'chai'
import {
  enableLaneEdit,
  finishLaneEdit,
  storyDropped
} from '../LaneActions'
import {
  ENABLE_LANE_EDIT,
  FINISH_LANE_EDIT,
  STORY_DROPPED
} from '../types'

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

  it('should create an action to signify a story being dropped into a lane', () => {
    const droppedItem = {
      newLaneId: '22',
      storyId: '1'
    }
    const expectedAction = {
      type: STORY_DROPPED,
      payload: droppedItem
    }
    expect(storyDropped(droppedItem)).to.deep.equal(expectedAction)
  })

})
