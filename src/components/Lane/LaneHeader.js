import React from 'react'
import { EditableInline } from '../common'

const LaneHeader = (props) => {
  return (
    <div className='lane-header'>
      <EditableInline { ...props } >
        <h2>{props.name}</h2>
      </EditableInline>
    </div>
  )
}

export default LaneHeader
