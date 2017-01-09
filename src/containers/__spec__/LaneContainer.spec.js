import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'

import mockStore from '../../../test-helpers/mockStore'
import mockStoreData from '../../../test-helpers/mockStoreData'

import LaneContainer from '../LaneContainer'
import Lane from '../../components/Lane/Lane'

function setup () {
  const store = mockStore(mockStoreData)
  const wrapper = mount(
    <Provider store={store}>
      <LaneContainer
        storyIds={[1, 2]}
      />
    </Provider>
  )

  return {
    wrapper
  }
}

describe('<LaneContainer />', () => {

  it('should render Lane', () => {
    const { wrapper } = setup()
    expect(wrapper.find(Lane)).to.be.length(1)
  })

})
