import React, { PropTypes } from 'react'

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

Story.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Story
