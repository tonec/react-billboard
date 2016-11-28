import { expect } from 'chai'

import { BoardView } from '../'
import BoardViewComponent from '../BoardView'

describe('<Board> components index', () => {

  it('should export all components as named exports', () => {
    expect(BoardView).to.equal(BoardViewComponent)
  })
})
