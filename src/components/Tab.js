import React from 'react'
import cn from 'classnames'

const Tab = (props) => {
  return (
    <div className={cn('tab', `tab-${props.className}`)}>
      {props.contentData.content}
    </div>
  )
}

export default Tab
