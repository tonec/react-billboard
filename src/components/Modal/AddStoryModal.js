import React from 'react'

const AddStoryModal = (props) => {
  return (
    <div>
      <form>

        <div className='form-group'>
          <label htmlFor='story-title'>Title</label>
          <input
            type='text'
            className='form-control'
            id='story-title'
            placeholder=''
            autoFocus={true}
            onChange={() => {}}
            value={'sdsdsd'}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='story-description'>Description</label>
          <input
            type='text'
            className='form-control'
            id='story-description'
            placeholder=''
            autoFocus={false}
            onChange={() => {}}
            value={'sdsdsd'}
          />
        </div>

      </form>
    </div>
  )
}

export default AddStoryModal
