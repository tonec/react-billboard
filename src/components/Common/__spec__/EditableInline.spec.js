import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'

import { EditableInline } from '../'

import jsdom from 'jsdom'
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc
global.window = doc.defaultView

describe('<EditableInline />', () => {

  describe('if editing is false', () => {

    let callback
    let wrapper

    beforeEach(() => {
      callback = sinon.spy()
      wrapper = shallow(
        <EditableInline
          handleClick={callback}
          editing={false}
        >
          <span>Test content</span>
        </EditableInline>
      )
    })

    it('should contain an anchor tag with the classname editable and tabindex of 0', () => {
      expect(wrapper.find('a')).to.be.length(1)
      expect(wrapper.find('a').hasClass('editable')).to.equal(true)
      expect(wrapper.find('a').prop('tabIndex')).to.equal('0')
    })

    it('should handle an onClick with the handler passed in as a prop', () => {
      wrapper.find('a').simulate('click')
      expect(callback.calledOnce).to.equal(true)
    })

    it('should render the child content', () => {
      expect(wrapper.find('span').text()).to.equal('Test content')
    })

  })

  describe('if editing is true', () => {

    let callback
    let wrapper

    beforeEach(() => {
      callback = sinon.spy()
      wrapper = mount(
        <EditableInline
          handleClick={callback}
          editing={true}
        >
          <span>Test content</span>
        </EditableInline>
      )
    })

    it('should render the EditInline component', () => {
      expect(wrapper.find('input')).to.be.length(1)
    })

    it('should not contain a div', () => {
      expect(wrapper.find('div')).to.be.length(0)
    })

  })

})
