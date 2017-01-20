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
  const wrapper = shallow(<Modal { ...props }><span>Test text</span></Modal>)

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

  it('should render any child components with the modal-body section', () => {
    const { wrapper } = setup()

    expect(wrapper.find('.modal-body').find('span')).to.be.length(1)
    expect(wrapper.find('.modal-body').find('span').text()).to.equal('Test text')
  })

})
