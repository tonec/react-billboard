import React from 'react'
import { shallow, mount } from 'enzyme'
import { expect } from 'chai'

import { TabsMenu } from '../'

describe('<TabsMenu />', () => {

  let data

  beforeEach(() => {
    data = [
      { title: 'Tab 1 title', content: 'Tab 1 content.' },
      { title: 'Tab 2 title', content: 'Tab 2 content.' },
      { title: 'Tab 3 title', content: 'Tab 3 content.' },
      { title: 'Tab 4 title', content: 'Tab 4 content.' }
    ]
  })

  it('should include a ul element', () => {
    const wrapper = shallow(<TabsMenu data={data} />)
    expect(wrapper.find('ul')).to.have.length(1)
  })

  it('should render the correct number of menu items', () => {
    const wrapper = mount(<TabsMenu data={data} />)
    expect(wrapper.find('li')).to.have.length(4)
  })

  it('should include the correct title text for each item', () => {
    const wrapper = mount(<TabsMenu data={data} />)
    expect(wrapper.find('li').at(0).text()).to.equal(data[0].title)
    expect(wrapper.find('li').at(1).text()).to.equal(data[1].title)
    expect(wrapper.find('li').at(2).text()).to.equal(data[2].title)
    expect(wrapper.find('li').at(3).text()).to.equal(data[3].title)
  })

  it('should pass the correct boolean value for active and inactive tabs', () => {
    const wrapper = mount(<TabsMenu data={data} activeTab={1} />)
    expect(wrapper.find('li').at(0).hasClass('active')).to.equal(false)
    expect(wrapper.find('li').at(1).hasClass('active')).to.equal(true)
  })

  it('should add an additional class to the container if one is provided through props', () => {
    const wrapper = shallow(<TabsMenu data={data} className={'test'} />)
    expect(wrapper.find('ul').hasClass('tabs-menu-test')).to.equal(true)
  })
})
