import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import { TabsMenuItem } from '../'

describe('<TabsMenuItem />', () => {

  it('should include the li and a element', () => {
    const wrapper = shallow(<TabsMenuItem />)
    expect(wrapper.find('li')).to.have.length(1)
    expect(wrapper.find('a')).to.have.length(1)
  })

  it('should have props for title and tab id', () => {
    const testTitle = 'Test title'
    const testTabId = 'test-tab-id'
    const wrapper = shallow(<TabsMenuItem tabId={testTabId} title={testTitle} />)
    expect(wrapper.find('a').props()['data-menu-item-id']).to.equal('test-tab-id')
    expect(wrapper.find('a').props().children).to.equal('Test title')
  })

  it('should have the active class name is currently active', () => {
    const wrapper = shallow(<TabsMenuItem active={true} />)
    expect(wrapper.hasClass('active')).to.equal(true)
  })
})
