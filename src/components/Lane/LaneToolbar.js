import React, { PropTypes } from 'react'
import cx from 'classnames'

const LaneToolbar = (props) => {
  return (
    <div className='lane-toolbar'>

      <button
        className='btn'
        onClick={props.addStory}
      >+</button>

      <button
        className={cx('btn', 'btn-danger', 'pull-right', {
          'disabled': (props.storyLength > 0)
        })}
        onClick={props.deleteLane}
      >X</button>

    </div>
  )
}

LaneToolbar.propTypes = {
  deleteLane: PropTypes.func.isRequired,
  addStory: PropTypes.func.isRequired,
  storyLength: PropTypes.number.isRequired
}

export default LaneToolbar
