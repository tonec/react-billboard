import React from 'react'
import Story from '../Story/Story'
import LaneHeader from './LaneHeader'
import LaneToolbarContainer from './LaneToolbarContainer'

const Lane = (props) => {
  return (
    <div className='lane box'>

      <LaneToolbarContainer
        laneId={props.laneId}
      />

      <LaneHeader name={props.name} />

      <div className='lane-body'>
        { props.stories.map(story => {
            return (
              <Story
                key={story.id}
                title={story.title}
                description={story.description}
              />
            )
          })}
      </div>

    </div>
  )
}

export default Lane
