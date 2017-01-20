import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import ModalHeader from '../ModalHeader'

function setup () {
  const props = {
    modal: {
      modalProps: {
        modalTitle: 'Test modal title'
      }
    },
    handleClose: () => {}
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
    expect(wrapper.find('button')).to.be.length(1)
  })
})
