import React, { PropTypes } from 'react'
import cx from 'classnames'

const AddStoryModal = (props) => {
  return (
    <div>
      <form>

        <div className='form-group form-input-title'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            className='form-control'
            id='storyTitle'
            placeholder=''
            autoFocus={true}
            onChange={props.handleTitleChange}
            value={props.title || ''}
          />
        </div>

        <div className='form-group form-input-description'>
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            className='form-control'
            id='storyDescription'
            placeholder=''
            autoFocus={false}
            onChange={props.handleDescriptionChange}
            value={props.description || ''}
          />
        </div>

      </form>

      <div className='modal-footer'>

        <button
          id='saveStory'
          type='submit'
          className={cx('btn', 'btn-primary')}
          onClick={props.handleSubmit}
        >
          Save story
        </button>

      </div>

    </div>
  )
}

AddStoryModal.propTypes = {
  handleTitleChange: PropTypes.func.isRequired,
  handleDescriptionChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default AddStoryModal
