import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../../storage/store'
import Layer from './Layer'

const layeredComponentHOC = (WrappedComponent) => {
  return class extends Component {

    _renderLayer () {
      this._layer = new Layer(document.body, () => this._wrappedComponent)
      this._layer.render()
    }

    _renderComponent (WrappedComponent) {
      return (
        <Provider store={store}>
          <WrappedComponent { ...this.props } />
        </Provider>
      )
    }

    render () {
      this._wrappedComponent = this._renderComponent(WrappedComponent)
      return null
    }

    componentDidMount () {
      this._renderLayer()
    }

    componentWillUnmount () {
      this._layer._removeMountPoint()
    }
  }
}

export default layeredComponentHOC
