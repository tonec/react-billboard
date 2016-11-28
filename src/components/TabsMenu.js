import React from 'react'
import cn from 'classnames'
import { TabsMenuItem } from './'

const TabsMenu = (props) => {
  return (
    <ul className={cn('tabs-menu', `tabs-menu-${props.className}`)}>
      {props.data.map((item, index) => {
        return (
          <TabsMenuItem
            key={'menu-item-' + index}
            tabId={index}
            title={item.title}
            active={(props.activeTab === index)}
          />
        )
      })}
    </ul>
  )
}

export default TabsMenu
