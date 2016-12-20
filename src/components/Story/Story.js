import React from 'react'

const Story = (props) => {
  return (
    <div className='story'>
      <div>
        {props.title}
      </div>
      <div>
        {props.description}
      </div>
    </div>
  )
}

export default Story
