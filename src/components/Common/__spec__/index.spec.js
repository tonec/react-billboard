import { expect } from 'chai'

import { Box, EditableInline, EditInline } from '../'
import BoxComponent from '../Box'
import EditableInlineComponent from '../EditableInline'
import EditInlineComponent from '../EditInline'

describe('Common components index', () => {

  it('should export the Box component as a named export', () => {
    expect(Box).to.equal(BoxComponent)
  })

  it('should export the EditableInline component as a named export', () => {
    expect(EditableInline).to.equal(EditableInlineComponent)
  })

  it('should export the EditInline component as a named export', () => {
    expect(EditInline).to.equal(EditInlineComponent)
  })

})
