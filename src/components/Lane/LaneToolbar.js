import React from 'react'

const LaneToolbar = (props) => {

  return (
    <div className='lane-toolbar'>
      
      <button
        className='btn'
        onClick={props.addStory}
      >Add story</button>

      <button
        className='btn btn-danger'
        onClick={props.deleteLane}
      >Delete lane</button>

    </div>
  )
}

export default LaneToolbar
