import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Lane from '../Lane'

function setup () {
  const props = {
    stories: []
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
  })
  
})
