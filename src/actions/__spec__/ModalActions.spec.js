import { expect } from 'chai'
import { showModal, hideModal } from '../ModalActions'
import {
  SHOW_MODAL,
  HIDE_MODAL,
  SAVE_STORY,
  ADD_STORY_MODAL
} from '../types'

describe('ModalActions', () => {

  it('should create an action to show a modal', () => {
    const props = {
      modalType: ADD_STORY_MODAL,
      modalProps: {
        modalTitle: 'Add story',
        hasSubmit: true,
        submitBtnText: 'Submit',
        onSubmitAction: SAVE_STORY,
        laneId: '1'
      }
    }
    const expectedAction = {
      type: SHOW_MODAL,
      modalType: ADD_STORY_MODAL,
      modalProps: {
        modalTitle: 'Add story',
        hasSubmit: true,
        submitBtnText: 'Submit',
        onSubmitAction: SAVE_STORY,
        laneId: '1'
      }
    }
    expect(showModal(props)).to.deep.equal(expectedAction)
  })

  it('should create an action to hide a modal', () => {
    const expectedAction = {
      type: HIDE_MODAL
    }
    expect(hideModal()).to.deep.equal(expectedAction)
  })

})
