import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import AddStoryModal from '../AddStoryModal'

function setup () {
  const props = {
    handleTitleChange: sinon.spy(),
    handleDescriptionChange: sinon.spy(),
    handleSubmit: sinon.spy(),
    title: 'Test title',
    description: 'Test description'
  }
  const wrapper = shallow(<AddStoryModal { ...props } />)

  return {
    props,
    wrapper
  }
}

describe('<AddStoryModal />', () => {

  it('should render with the correct form markup', () => {
    const { props, wrapper } = setup()
    const titleInput = wrapper.find('.form-input-title')
    const descriptionInput = wrapper.find('.form-input-description')

    expect(wrapper.find('form')).to.be.length(1)

    expect(titleInput).to.be.length(1)
    expect(titleInput.find('label').text()).to.equal('Title')
    expect(titleInput.find('input').props().value).to.equal(props.title)
    expect(titleInput.find('input').props().autoFocus).to.equal(true)

    expect(descriptionInput).to.be.length(1)
    expect(descriptionInput.find('label').text()).to.equal('Description')
    expect(descriptionInput.find('input').props().value).to.equal(props.description)
    expect(descriptionInput.find('input').props().autoFocus).to.equal(false)

    expect(wrapper.find('.modal-footer')).to.be.length(1)
    expect(wrapper.find('.modal-footer').find('button')).to.be.length(1)
    expect(wrapper.find('.modal-footer').find('button').props().type).to.equal('submit')
    expect(wrapper.find('.modal-footer').find('button').text()).to.equal('Save story')
  })

  it('should include a submit button which, when clicked, should call the handleSubmit method passed as a prop', () => {
    const { props, wrapper } = setup()

    wrapper.find('.modal-footer').find('button').simulate('click')

    expect(props.handleSubmit.calledOnce).to.equal(true)
  })

  it('should call the appropriate onChange methods when typing in each fields', () => {
    const { props, wrapper } = setup()
    const titleInput = wrapper.find('.form-input-title')
    const descriptionInput = wrapper.find('.form-input-description')

    titleInput.find('input').simulate('change')
    expect(props.handleTitleChange.calledOnce).to.equal(true)

    descriptionInput.find('input').simulate('change')
    expect(props.handleDescriptionChange.calledOnce).to.equal(true)
  })
})
