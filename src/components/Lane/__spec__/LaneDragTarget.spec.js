import React, { Component } from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import TestBackEnd from 'react-dnd-test-backend'
import { DragDropContext } from 'react-dnd'
import { Provider } from 'react-redux'
import mockStore from '../../../../test-helpers/mockStore'
import mockStoreData from '../../../../test-helpers/mockStoreData'
import LaneDropTarget from '../LaneDropTarget'
import Story from '../../Story/Story'

function wrapInTestContext (DecoratedComponent) {
  const store = mockStore(mockStoreData)

  return DragDropContext(TestBackEnd)(
    class TestContextContainer extends Component {
      render () {

        return (
          <Provider store={store}>
            <DecoratedComponent { ...this.props } />
          </Provider>
        )
      }
    }
  )
}

// TODO: Finish DnD tests

describe('<LaneDropTarget />', () => {

  it('uses correct opacity is applied before and after dragging begins', () => {
    const LaneDropTargetContext = wrapInTestContext(LaneDropTarget)
    const wrapper = mount(<LaneDropTargetContext />)
    const manager = wrapper.get(0).getManager()
    const backend = manager.getBackend()
    const monitor = manager.getMonitor()
    const div = wrapper.find(Story)

    // console.log(div.getHandlerId)

    // Test before drag
    // expect(wrapper.find('div').props().style.border).to.equal('none')

    // console.log(backend.simulateBeginDrag())
    // Test during drag
    // expect(wrapper.find('div').props().style.border).to.equal('1px solid red')
  })
})
