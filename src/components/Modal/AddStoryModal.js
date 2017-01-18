import React from 'react'
import cx from 'classnames'

const AddStoryModal = (props) => {
  return (
    <div>
      <form>

        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            className='form-control'
            id='title'
            placeholder=''
            autoFocus={true}
            onChange={props.handleTitleChange}
            value={props.title || ''}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            className='form-control'
            id='description'
            placeholder=''
            autoFocus={false}
            onChange={props.handleDescriptionChange}
            value={props.description || ''}
          />
        </div>

      </form>

      <div className='modal-footer'>

        <button
          type='button'
          className={cx('btn', 'btn-primary')}
          onClick={props.handleSubmit}
        >
          Save story
        </button>

      </div>

    </div>
  )
}

export default AddStoryModal
