import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Story from '../Story'

function setup () {
  const OriginalStory = Story.DecoratedComponent
  const identity = el => el
  const props = {
    id: '1',
    title: 'Story title',
    description: 'Story description'
  }
  const wrapper = shallow(<OriginalStory { ...props } connectDragSource={identity} />)

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
