import { render } from 'react-dom'

class Layer {

  constructor (container, renderComponent) {
    this._container = container
    this._renderComponent = renderComponent
  }

  _createMountPoint () {
    this._mountPoint = document.createElement('div')
    this._container.appendChild(this._mountPoint)
  }

  _removeMountPoint () {
    this._container.removeChild(this._mountPoint)
  }

  render () {
    this._createMountPoint()
    return render(this._renderComponent(), this._mountPoint)
  }
}

export default Layer
