import React from 'react'
import Story from './Story'

const Lane = (props) => {
    return (
      <div className='lane box'>

        <div className='lane-header'>
          <div className='lane-actions'>
            <button className='btn' onClick={props.addStore}>Add story</button>
          </div>
          <h2>{props.name}</h2>
        </div>

        <div className='lane-body'>
          {props.stories.map(story => {
            return (
              <Story
                key={story.id}
                title={story.title}
              />
            )
          })}
        </div>

      </div>
    )
}

export default Lane
