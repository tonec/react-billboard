import React from 'react'

export default (props) => {
  return (
    <input
      type='text'
      autoFocus={true}
      defaultValue={props.name}
      onKeyPress={props.handleKeyPress}
    />
  )
}
