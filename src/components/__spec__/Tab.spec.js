import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import { Tab } from '../'

describe('<Tab />', () => {

  const currentContent = {
    index: 0,
    content: 'Test content'
  }

  it('should include a div element', () => {
    const wrapper = shallow(<Tab contentData={currentContent} />)
    expect(wrapper.find('div')).to.be.length(1)
  })

  it('should render the correct content', () => {
    const wrapper = shallow(<Tab contentData={currentContent} />)
    expect(wrapper.childAt(0).text()).to.equal(currentContent.content)
  })

  it('should add an additional class to the container if one is provided through props', () => {
    const wrapper = shallow(<Tab contentData={currentContent} className={'test'} />)
    expect(wrapper.find('div').first().hasClass('tab-test')).to.equal(true)
  })
})
