import React, { Component } from 'react'
import uuid from 'uuid'
import { HIDE_MODAL, SAVE_STORY } from '../actions/types'
import AddStoryModal from '../components/Modal/AddStoryModal'

export class AddStoryModalContainer extends Component {

  constructor (props) {
    super(props)

    this.state = {
      title: '',
      description: ''
    }

    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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

  handleSubmit () {
    this.props.dispatch({
      type: SAVE_STORY,
      payload: {
        id: uuid.v4(),
        title: this.state.title,
        description: this.state.description,
        laneId: this.props.modal.modalProps.laneId
      }
    })
    this.props.dispatch({
      type: HIDE_MODAL
    })
  }

  render () {
    return (
      <AddStoryModal
        { ...this.props }
        title={this.state.title}
        description={this.state.description}
        handleTitleChange={this.handleTitleChange}
        handleDescriptionChange={this.handleDescriptionChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default AddStoryModalContainer
