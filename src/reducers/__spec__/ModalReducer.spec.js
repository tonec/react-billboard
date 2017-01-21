import { expect } from 'chai'

import {
  SHOW_MODAL,
  HIDE_MODAL
} from '../../actions/types'

import ModalReducer from '../ModalReducer'

describe('ModalReducer', () => {

  let initialState

  beforeEach(() => {
    initialState = {
      modalType: null,
      modalProps: {
        title: ''
      }
    }
  })

  it('should return the initial state', () => {
    expect(ModalReducer(undefined, {})).to.deep.equal(initialState)
  })

  it('should handle SHOW_MODAL', () => {
    const action = {
      type: SHOW_MODAL,
      modalType: 'TEST_MODAL_TYPE',
      modalProps: {
        title: 'Test title'
      }
    }
    const expectedState = {
      modalType: 'TEST_MODAL_TYPE',
      modalProps: {
        title: 'Test title'
      }
    }
    expect(ModalReducer(initialState, action)).to.deep.equal(expectedState)
  })

  it('should handle HIDE_MODAL', () => {
    const showAction = {
      type: SHOW_MODAL,
      modalType: 'TEST_MODAL_TYPE',
      modalProps: {
        title: 'Test title'
      }
    }
    const ShowExpectedState = {
      modalType: 'TEST_MODAL_TYPE',
      modalProps: {
        title: 'Test title'
      }
    }
    expect(ModalReducer(initialState, showAction)).to.deep.equal(ShowExpectedState)
    const hideAction = {
      type: HIDE_MODAL
    }
    expect(ModalReducer(initialState, hideAction)).to.deep.equal(initialState)
  })

})
