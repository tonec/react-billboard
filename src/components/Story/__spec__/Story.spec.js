import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Story from '../Story'

function setup () {
  const props = {
    title: 'Story title',
    description: 'Story description'
  }
  const wrapper = shallow(<Story { ...props } />)

  return {
    props,
    wrapper
  }
}

describe('<Story />', () => {

  it('should render the content', () => {
    const { wrapper, props } = setup()
    expect(wrapper.find('.story')).to.be.length(1)
    expect(wrapper.find('.story-title').text()).to.equal(props.title)
    expect(wrapper.find('.story-description').text()).to.equal(props.description)
  })

})
