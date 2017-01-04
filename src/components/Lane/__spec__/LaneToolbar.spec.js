import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import LaneToolbar from '../LaneToolbar'

function setup () {
  const props = {
    addStory: sinon.spy(),
    deleteLane: sinon.spy()
  }
  const wrapper = shallow(<LaneToolbar { ...props } />)

  return {
    props,
    wrapper
  }
}

describe('<LaneToolbar />', () => {

  it('should render the layout elements', () => {
    const { wrapper } = setup()
    expect(wrapper.find('.lane-toolbar')).to.be.length(1)
    expect(wrapper.find('.btn')).to.be.length(2)
  })

})
