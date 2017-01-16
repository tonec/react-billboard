import React from 'react'
import { EditInline } from './'

export default (props) => {

  if (props.editing) {
    return (
      <EditInline { ...props } />
    )
  }

  return (
    <a
      className='editable'
      tabIndex='0'
      onClick={props.handleClick.bind(this, props.laneId)}
    >
      {props.children}
    </a>
  )
}
