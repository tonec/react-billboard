import React, { Component, PropTypes } from 'react'
import { DragSource } from 'react-dnd'
import ItemTypes from '../../constants/ItemTypes'

const storySource = {
  beginDrag (props) {
    console.log(props)
    return {
      storyId: props.id
    }
  }
}

function collect (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Story extends Component {
  render () {
    const { title, description, connectDragSource, isDragging } = this.props

    return connectDragSource(
      <div className='story' style={{ opacity: isDragging ? 0.5 : 1 }}>
        <div className='story-title'>
          {title}
        </div>
        <div className='story-description'>
          {description}
        </div>
      </div>
    )
  }
}

Story.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default DragSource(ItemTypes.STORY, storySource, collect)(Story)
