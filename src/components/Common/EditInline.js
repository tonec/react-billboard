import React from 'react'

export default (props) => {
  // TODO: Changed to a controlled input
  return (
    <input
      type='text'
      autoFocus={true}
      defaultValue={props.name}
      onKeyPress={props.handleKeyPress}
    />
  )
}
