import React, { PropTypes } from 'react'
import Story from '../Story/Story'
import LaneHeader from './LaneHeader'
import LaneToolbarContainer from '../../containers/LaneToolbarContainer'

const Lane = (props) => {
  return (
    <div className='lane box'>

      <LaneToolbarContainer
        laneId={props.laneId}
        storyLength={props.stories.length}
      />

      <LaneHeader { ...props } />

      <div className='lane-body'>
        { props.stories.map(story => {
            return (
              <Story
                key={story.id}
                id={story.id}
                title={story.title}
                description={story.description}
              />
            )
          })}
      </div>

    </div>
  )
}

Lane.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  stories: PropTypes.array.isRequired
}

export default Lane
