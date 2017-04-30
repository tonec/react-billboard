import chai, { expect } from 'chai'
import { fromJS } from 'immutable'
import chaiImmutable from 'chai-immutable'
import {
  SHOW_MODAL,
  HIDE_MODAL
} from '../../actions/types'
import ModalReducer from '../ModalReducer'

chai.use(chaiImmutable)

describe('ModalReducer', () => {

  let initialState

  beforeEach(() => {
    initialState = fromJS({
      modalType: null,
      modalProps: {
        title: ''
      }
    })
  })

  it('should return the initial state', () => {
    expect(ModalReducer(initialState, {})).to.deep.equal(initialState)
  })

  it('should handle SHOW_MODAL', () => {
    const action = {
      type: SHOW_MODAL,
      modalType: 'TEST_MODAL_TYPE',
      modalProps: {
        title: 'Test title'
      }
    }

    expect(ModalReducer(initialState, action).get('modalType')).to.equal('TEST_MODAL_TYPE')
    expect(ModalReducer(initialState, action).getIn(['modalProps', 'title'])).to.equal('Test title')
  })

  it('should handle HIDE_MODAL', () => {
    const showAction = {
      type: SHOW_MODAL,
      modalType: 'TEST_MODAL_TYPE',
      modalProps: {
        title: 'Test title'
      }
    }

    expect(ModalReducer(initialState, showAction).get('modalType')).to.equal('TEST_MODAL_TYPE')
    expect(ModalReducer(initialState, showAction).getIn(['modalProps', 'title'])).to.equal('Test title')

    const hideAction = {
      type: HIDE_MODAL
    }
    expect(ModalReducer(initialState, hideAction).get('modalType')).to.equal(null)
    expect(ModalReducer(initialState, hideAction).getIn(['modalProps', 'title'])).to.equal('')
  })

})
