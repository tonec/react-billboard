import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import sinon from 'sinon'

import { BoardContainer } from '../BoardContainer'
import Board from '../../components/Board/Board'

function setup () {
  const props = {
    addLaneAction: sinon.spy(),
    lanes: []
  }

  const wrapper = mount(
    <BoardContainer { ...props } />
  )

  return {
    props,
    wrapper
  }
}

describe('<BoardContainer />', () => {

  it('should render Board', () => {
    const { wrapper } = setup()
    expect(wrapper.find(Board)).to.be.length(1)
  })

  it('should have a method to call the addLaneAction creator', () => {
    const { props, wrapper } = setup()
    const instance = wrapper.instance()

    instance.onAddLane()
    
    expect(props.addLaneAction.calledOnce).to.equal(true)
  })

})
