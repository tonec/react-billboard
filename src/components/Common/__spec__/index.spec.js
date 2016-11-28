import { expect } from 'chai'

import { Box } from '../'
import BoxComponent from '../Box'

describe('Common components index', () => {

  it('should export all components as named exports', () => {
    expect(Box).to.equal(BoxComponent)
  })
})
