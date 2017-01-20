import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import ModalHeader from '../ModalHeader'

function setup () {
  const props = {
    modal: {
      modalProps: {
        modalTitle: 'Test modal title'
      }
    },
    handleClose: sinon.spy()
  }
  const wrapper = shallow(<ModalHeader { ...props } />)

  return {
    props,
    wrapper
  }
}

describe('<ModalHeader />', () => {

  it('should render with the correct markup ', () => {
    const { props, wrapper } = setup()

    expect(wrapper.find('.modal-header')).to.be.length(1)
    expect(wrapper.find('.modal-title')).to.be.length(1)
    expect(wrapper.find('.modal-title').text()).to.equal(props.modal.modalProps.modalTitle)
    expect(wrapper.find('.close')).to.be.length(1)
    expect(wrapper.find('.close').text()).to.equal('X')
  })

  it('should call the handleClose method when the close button is clicked', () => {
    const { props, wrapper } = setup()

    wrapper.find('.close').simulate('click')

    expect(props.handleClose.calledOnce).to.equal(true)
  })

})
