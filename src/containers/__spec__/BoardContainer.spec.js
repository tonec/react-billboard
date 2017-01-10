import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import mockStore from '../../../test-helpers/mockStore'
import mockStoreData from '../../../test-helpers/mockStoreData'

import { BoardContainer } from '../BoardContainer'
import Board from '../../components/Board/Board'

function setup () {
  const store = mockStore(mockStoreData)
  const wrapper = mount(
    <Provider store={store}>
      <BoardContainer lanes={[]} />
    </Provider>
  )

  return {
    wrapper
  }
}

describe('<BoardContainer />', () => {

  it('should render Board', () => {
    const { wrapper } = setup()
    
    expect(wrapper.find(Board)).to.be.length(1)
  })

})
