import React, { Component } from 'react'

class AddStoryModal extends Component {

  constructor (props) {
    super(props)

    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
  }

  handleTitleChange (event) {
    this.setState({
      title: event.target.value
    })
  }

  handleDescriptionChange (event) {
    this.setState({
      description: event.target.value
    })
  }

  render () {
    return (
      <div>
        <form>

          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              className='form-control'
              id='title'
              placeholder=''
              autoFocus={true}
              onChange={this.props.onUpdate}
              value={this.props.state.title || ''}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='description'>Description</label>
            <input
              type='text'
              className='form-control'
              id='description'
              placeholder=''
              autoFocus={false}
              onChange={this.props.onUpdate}
              value={this.props.state.description || ''}
            />
          </div>

        </form>
      </div>
    )
  }
}

export default AddStoryModal
