import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Lane from '../Lane'
import LaneToolbarContainer from '../../../containers/LaneToolbarContainer'
import LaneHeader from '../LaneHeader'
import Story from '../../Story/Story'

function setup () {
  const props = {
    stories: [
      { id: '1', title: 'Story 1', description: 'Lorem ipsum dolor sit amet.' }
    ]
  }
  const wrapper = shallow(<Lane { ...props } />)

  return {
    props,
    wrapper
  }
}

describe('<Lane />', () => {

  it('should render the layout elements', () => {
    const { wrapper } = setup()
    expect(wrapper.find('.lane')).to.be.length(1)
    expect(wrapper.find('.lane-body')).to.be.length(1)
    expect(wrapper.find(LaneToolbarContainer)).to.be.length(1)
    expect(wrapper.find(LaneHeader)).to.be.length(1)
    expect(wrapper.find(Story)).to.be.length(1)
  })

})
