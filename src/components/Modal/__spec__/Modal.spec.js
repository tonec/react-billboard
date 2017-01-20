import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Modal from '../Modal'
import ModalHeader from '../ModalHeader'

function setup () {
  const props = {
    modal: {},
    handleClose: () => {}
  }
  const wrapper = shallow(<Modal { ...props } />)

  return {
    props,
    wrapper
  }
}

describe('<Modal />', () => {

  it('should render with the correct markup and ModalHeader component', () => {
    const { wrapper } = setup()

    expect(wrapper.find('.modal-backdrop')).to.be.length(1)
    expect(wrapper.find('.modal')).to.be.length(1)
    expect(wrapper.find('.modal').props().tabIndex).to.equal('-1')
    expect(wrapper.find('.modal').props().role).to.equal('dialog')
    expect(wrapper.find('.modal-dialog')).to.be.length(1)
    expect(wrapper.find('.modal-content')).to.be.length(1)
    expect(wrapper.find('.modal-body')).to.be.length(1)
    expect(wrapper.find(ModalHeader)).to.be.length(1)
  })
})
