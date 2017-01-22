import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import sinon from 'sinon'

import mockStore from '../../../test-helpers/mockStore'
import mockStoreData from '../../../test-helpers/mockStoreData'

import AddStoryModalContainerConnected, { AddStoryModalContainer } from '../AddStoryModalContainer'
import AddStoryModal from '../../components/Modal/AddStoryModal'

function setup () {
  const dispatch = sinon.spy()
  const store = mockStore(mockStoreData)
  const props = {
    modal: {
      modalProps: {
        laneId: '1'
      }
    }
  }
  
  const wrapper = mount(
    <AddStoryModalContainer { ...props } dispatch={dispatch} />
  )

  const connectedWrapper = mount(
    <Provider store={store}>
      <AddStoryModalContainerConnected { ...props } />
    </Provider>
  )

  return {
    props,
    dispatch,
    wrapper,
    connectedWrapper
  }
}

describe('<AddStoryModal />', () => {

  it('should render Lane', () => {
    const { wrapper } = setup()
    expect(wrapper.find(AddStoryModal)).to.be.length(1)
  })

  it('should render a save story button which calls handleSubmit on click', () => {
    const { wrapper } = setup()
    const component = wrapper.instance()
    const handleSubmitStub = sinon.stub(component, 'handleSubmit', () => {})

    component.forceUpdate()
    wrapper.update()

    wrapper.find('#saveStory').simulate('click')

    expect(handleSubmitStub.callCount).to.equal(1)
  })

  it('should render a title input which calls handleTitleChange on change', () => {
    const { wrapper } = setup()
    const component = wrapper.instance()
    const handleTitleChange = sinon.stub(component, 'handleTitleChange', () => {})

    component.forceUpdate()
    wrapper.update()

    wrapper.find('#storyTitle').simulate('change')

    expect(handleTitleChange.callCount).to.equal(1)
  })

  it('should render a description input which calls handleDescriptionChange on change', () => {
    const { wrapper } = setup()
    const component = wrapper.instance()
    const handleDescriptionChange = sinon.stub(component, 'handleDescriptionChange', () => {})

    component.forceUpdate()
    wrapper.update()

    wrapper.find('#storyDescription').simulate('change')

    expect(handleDescriptionChange.callCount).to.equal(1)
  })

  it('should have a method to set the title in state', () => {
    const { wrapper } = setup()
    const instance = wrapper.instance()
    const mockEvent = {
      target: {
        value: 'Test title'
      }
    }
    instance.handleTitleChange(mockEvent)
    expect(instance.state.title).to.equal(mockEvent.target.value)
  })

  it('should have a method to set the description in state', () => {
    const { wrapper } = setup()
    const instance = wrapper.instance()
    const mockEvent = {
      target: {
        value: 'Test description'
      }
    }
    instance.handleDescriptionChange(mockEvent)
    expect(instance.state.description).to.equal(mockEvent.target.value)
  })

  it('should have a method to dispatch the SAVE_STORY event', () => {
    const { wrapper, dispatch } = setup()
    const instance = wrapper.instance()
    instance.handleSubmit()

    // Note: there are two calls to dispatch in this method
    expect(dispatch.callCount).to.equal(2)
  })

})
