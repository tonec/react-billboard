import React, { PropTypes } from 'react'
import Story from '../Story/Story'
import LaneHeader from './LaneHeader'
import LaneToolbarContainer from '../../containers/LaneToolbarContainer'
import LaneDropTarget from './LaneDropTarget'

const Lane = (props) => {
  return (
    <div className='lane box'>

      <LaneToolbarContainer
        laneId={props.laneId}
        storyLength={props.stories.length}
      />

      <LaneHeader { ...props } />

      <div className='lane-body'>

        <LaneDropTarget
          id={null}
          laneId={props.laneId}
         />

        { props.stories.map(story => {
            return (
              <div key={story.id}>
                <Story
                  id={story.id}
                  title={story.title}
                  description={story.description}
                />
                <LaneDropTarget
                  id={story.id}
                  laneId={props.laneId}
                  stories={props.stories}
                />
              </div>
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
