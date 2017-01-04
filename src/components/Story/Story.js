import React from 'react'

const Story = (props) => {
  return (
    <div className='story'>
      <div className='story-title'>
        {props.title}
      </div>
      <div className='story-description'>
        {props.description}
      </div>
    </div>
  )
}

export default Story
