import React, { PropTypes } from 'react'
import Story from '../Story/Story'
import LaneHeader from './LaneHeader'
import LaneToolbarContainer from '../../containers/LaneToolbarContainer'
import LaneDragTarget from './LaneDragTarget'

const Lane = (props) => {
  return (
    <div className='lane box'>

      <LaneToolbarContainer
        laneId={props.laneId}
        storyLength={props.stories.length}
      />

      <LaneHeader { ...props } />

      <LaneDragTarget laneId={props.laneId}>
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
      </LaneDragTarget>

    </div>
  )
}

Lane.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  stories: PropTypes.array.isRequired
}

export default Lane
