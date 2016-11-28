import {expect} from 'chai'

import { Tabs, Tab, TabsMenu, TabsMenuItem } from '../index'
import TabsComponent from '../Tabs'
import TabComponent from '../Tab'
import TabsMenuComponent from '../TabsMenu'
import TabsMenuItemComponent from '../TabsMenuItem'

describe('Components index.js', () => {

  it('should export all components as named exports', () => {
    expect(Tabs).to.equal(TabsComponent)
    expect(Tab).to.equal(TabComponent)
    expect(TabsMenu).to.equal(TabsMenuComponent)
    expect(TabsMenuItem).to.equal(TabsMenuItemComponent)
  })
})
