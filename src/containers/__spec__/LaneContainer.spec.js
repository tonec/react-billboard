import React, { Component } from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { DragDropContext } from 'react-dnd'
import TestBackend from 'react-dnd-test-backend'

import mockStore from '../../../test-helpers/mockStore'
import mockStoreData from '../../../test-helpers/mockStoreData'

import LaneContainer from '../LaneContainer'
import Lane from '../../components/Lane/Lane'

function wrapInTestContext (DecoratedComponent) {
  return DragDropContext(TestBackend)(
    class TestContextContainer extends Component {
      render () {
        return <DecoratedComponent { ...this.props } />
      }
    }
  )
}

function setup () {
  const store = mockStore(mockStoreData)
  const LaneContainerContext = wrapInTestContext(LaneContainer)
  const props = {
    storyIds: [1, 2],
    name: 'Lane name',
    laneId: '1'
  }
  const wrapper = mount(
    <Provider store={store}>
      <LaneContainerContext { ...props } />
    </Provider>
  )

  return {
    props,
    wrapper
  }
}

describe('<LaneContainer />', () => {

  // it('should render Lane', () => {
  //   const { wrapper } = setup()
  //   expect(wrapper.find(Lane)).to.be.length(1)
  // })

})
