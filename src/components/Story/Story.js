import React from 'react'

const Story = (props) => {
  console.log(props)
    return (
      <div>
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
