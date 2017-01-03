import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import { Box } from '../'

describe('<Box />', () => {

  it('should contain a div with the class box', () => {
    const wrapper = shallow(<Box />)
    expect(wrapper.find('div')).to.be.length(1)
    expect(wrapper.find('div').hasClass('box')).to.equal(true)
  })

  it('should render the child content', () => {
    const wrapper = shallow(<Box><span>Text content</span></Box>)
    expect(wrapper.find('span')).to.be.length(1)
    expect(wrapper.find('span').text()).to.equal('Text content')
  })

})
