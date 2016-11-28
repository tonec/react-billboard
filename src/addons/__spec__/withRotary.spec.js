import React, { Component } from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'

import withRotary from '../withRotary'
import { Tabs } from '../../components/'

describe('withRotary HoC', () => {
  let data, HoCTestComponent

  beforeEach(() => {

    data = [
      { title: 'Tab 1 title', content: 'Tab 1 content.' },
      { title: 'Tab 2 title', content: 'Tab 2 content.' },
      { title: 'Tab 3 title', content: 'Tab 3 content.' },
      { title: 'Tab 4 title', content: 'Tab 4 content.' }
    ]

    class TestComponent extends Component {
      render () {
        const rotaryOpts = {
          cycles: 2,
          speed: 1000,
          initialActiveTab: 1
        }

        return (
          <Tabs
            { ...this.props }
            rotary={true}
            rotaryOpts={rotaryOpts}
            className={'rotary'}
          />
        )
      }
    }

    HoCTestComponent = withRotary(TestComponent)
  })

  it('should have a sensible default for activeTab which must be a number', () => {
    const wrapper = mount(<HoCTestComponent data={data} />)
    expect(wrapper.state('activeTab')).to.be.a('number')
  })

  it('should initiate with the correct tab if an initialActiveTab is passed in', () => {
    const wrapper = mount(<HoCTestComponent data={data} />)
    expect(wrapper.state('activeTab')).to.equal(1)
  })

  it('should cycle through each tab', () => {
  })

  // should cycle through each a correct number of times

  // should end on the first tab when done

  // should stop cycling if a tab is clicked

  // should pause cycling if the tabs are hovered over

})
