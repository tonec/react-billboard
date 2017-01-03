import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import Board from '../Board'

function setup () {
  const props = {
    addLane: sinon.spy(),
    lanes: [
      { id: '1', name: 'Lane 1', editing: false, storyIds: ['1', '2'] },
      { id: '2', name: 'Lane 2', editing: false, storyIds: ['3'] },
      { id: '3', name: 'Lane 3', editing: false, storyIds: [] },
      { id: '4', name: 'Lane 4', editing: false, storyIds: [] }
    ]
  }
  const wrapper = shallow(<Board { ...props } />)

  return {
    props,
    wrapper
  }
}

describe('<Board />', () => {

  it('should render the layout elements', () => {
    const { wrapper } = setup()
    expect(wrapper.find('.board')).to.be.length(1)
    expect(wrapper.find('.board-header')).to.be.length(1)
    expect(wrapper.find('button').hasClass('btn btn-primary')).to.equal(true)
    expect(wrapper.find('.board-body')).to.be.length(1)
  })

  it('should call the addLane handler when the button is clicked', () => {
    const { wrapper, props } = setup()
    wrapper.find('button').simulate('click')
    expect(props.addLane.calledOnce).to.equal(true)
  })

  it('should render the LaneContainer for each lane in props', () => {
    // TODO: finish this test
  })

})
