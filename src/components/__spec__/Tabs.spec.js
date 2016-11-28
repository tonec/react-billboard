import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'

import { Tabs, Tab, TabsMenu } from '../'

describe('<Tabs/>', () => {

  let data

  beforeEach(() => {
    data = [
      { title: 'Tab 1 title', content: 'Tab 1 content.' },
      { title: 'Tab 2 title', content: 'Tab 2 content.' },
      { title: 'Tab 3 title', content: 'Tab 3 content.' },
      { title: 'Tab 4 title', content: 'Tab 4 content.' }
    ]
  })

  it('should have a sensible default for activeTab which must be a number', () => {
    const wrapper = mount(<Tabs data={data} initialActiveTab={1} />)
    expect(wrapper.state('activeTab')).to.be.a('number')
  })

  it('should accept a property to change the initial activeTab', () => {
    const wrapper = mount(<Tabs data={data} initialActiveTab={1} />)
    expect(wrapper.prop('initialActiveTab')).to.equal(1)
    expect(wrapper.prop('initialActiveTab')).to.not.equal(0)
  })

  it('should have an initial state equal to the activeTab property', () => {
    const wrapper = mount(<Tabs data={data} initialActiveTab={1} />)
    expect(wrapper.state().activeTab).to.equal(1)
  })

  it('should contain a correctly rendered menu', () => {
    const wrapper = mount(<Tabs data={data} />)
    expect(wrapper.find(TabsMenu)).to.have.length(1)
    expect(wrapper.find(TabsMenu).find('li')).to.have.length(4)
    expect(wrapper.find(TabsMenu).childAt(0).text()).to.equal(data[0].title)
    expect(wrapper.find(TabsMenu).childAt(1).text()).to.equal(data[1].title)
    expect(wrapper.find(TabsMenu).childAt(2).text()).to.equal(data[2].title)
    expect(wrapper.find(TabsMenu).childAt(3).text()).to.equal(data[3].title)
  })

  it('should contain a correctly rendered Tab', () => {
    const wrapper = mount(<Tabs data={data} initialActiveTab={1} />)
    expect(wrapper.find(Tab)).to.have.length(1)
    expect(wrapper.find(Tab).text()).to.equal(data[1].content)
  })

  it('should update the activeTab state when a menu item is clicked', () => {
    const wrapper = mount(<Tabs data={data} />)
    wrapper.find(TabsMenu).childAt(2).find('a').simulate('click')
    expect(wrapper.state('activeTab')).to.equal(2)
  })

  it('should update the menu item class name when a menu item is clicked', () => {
    const wrapper = mount(<Tabs data={data} />)
    wrapper.find(TabsMenu).childAt(2).find('a').simulate('click')
    expect(wrapper.find(TabsMenu).find('li').at(2).hasClass('active')).to.equal(true)
  })

  it('should display the correct tab content when a menu item is clicked', () => {
    const wrapper = mount(<Tabs data={data} />)
    wrapper.find(TabsMenu).childAt(2).find('a').simulate('click')
    expect(wrapper.find(Tab).text()).to.equal(data[2].content)
  })

  it('should add an additional class to the container if one is provided through props', () => {
    const wrapper = mount(<Tabs data={data} className={'test'} />)
    expect(wrapper.find('div').first().hasClass('tabs-test')).to.equal(true)
  })
})
