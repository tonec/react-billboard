import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import LaneHeader from '../LaneHeader'

function setup () {
  const props = {
    name: 'Lane name'
  }
  const wrapper = shallow(<LaneHeader { ...props } />)

  return {
    props,
    wrapper
  }
}

describe('<LaneHeader />', () => {

  it('should render the layout elements', () => {
    const { wrapper, props } = setup()
    expect(wrapper.find('.lane-header')).to.be.length(1)
    expect(wrapper.find('h2').text()).to.equal(props.name)
  })

})
