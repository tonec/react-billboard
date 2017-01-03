import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import BoardView from '../BoardView'

describe('<BoardView />', () => {

  it('should render the layout elements', () => {
    const wrapper = shallow(<BoardView />)
    expect(wrapper.find('div').hasClass('layout-col-one')).to.equal(true)
    expect(wrapper.find('h1').text()).to.equal('React Billboard')
  })

  // TODO: Test BoardContainer

})
