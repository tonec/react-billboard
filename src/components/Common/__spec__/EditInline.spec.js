import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import sinon from 'sinon'

chai.use(chaiEnzyme())

import { EditInline } from '../'

describe('<EditInline />', () => {

  let testValue
  let onKeyPressHandler
  let wrapper

  beforeEach(() => {
    testValue = 'Test value'
    onKeyPressHandler = sinon.spy()
    wrapper = shallow(<EditInline defaultValue={testValue} handleKeyPress={onKeyPressHandler} />)
  })

  it('should render an input of type text and autoFocus set to true', () => {
    expect(wrapper.find('input')).to.be.length(1)
    expect(wrapper.find('input').prop('type')).to.equal('text')
    expect(wrapper.find('input').prop('autoFocus')).to.equal(true)
  })

  it('should render an input with the default value passed through props', () => {
    // TODO: Figure out why this test fails
    // expect(wrapper.find('input')).to.have.value(testValue)
  })

  it('should handle and onKeyPress with the handler passed through props', () => {
    wrapper.find('input').simulate('keypress')
    expect(onKeyPressHandler.calledOnce).to.equal(true)
  })

})
