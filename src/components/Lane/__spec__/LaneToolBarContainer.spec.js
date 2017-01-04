import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'

import mockStore from '../../../../test-helpers/mockStore'
import mockStoreData from '../../../../test-helpers/mockStoreData'

import LaneToolbarContainer from '../LaneToolbarContainer'
import LaneToolbar from '../LaneToolbar'

function setup () {
  const store = mockStore(mockStoreData)
  const wrapper = mount(
    <Provider store={store}>
      <LaneToolbarContainer />
    </Provider>
  )

  return {
    wrapper
  }
}

describe('<LaneToolbarContainer />', () => {

  it('should render Lane', () => {
    const { wrapper } = setup()
    expect(wrapper.find(LaneToolbar)).to.be.length(1)
  })

})
