import React, { Component, PropTypes } from 'react'
import cn from 'classnames'
import { TabsMenu, Tab } from './'

class Tabs extends Component {

  constructor (props) {
    super(props)

    this.state = {
      activeTab: this.props.initialActiveTab
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
    if (this.props.rotary) {
      this.props.initRotary(this.props.rotaryOpts)
    }
  }

  componentWillReceiveProps (newProps) {
    if (this.props.rotary && newProps.activeTab !== this.state.activeTab) {
      this.setState({
        activeTab: newProps.activeTab
      })
    }
  }

  shouldComponentUpdate (nextProps, nextState) {
    return (nextState.activeTab !== this.state.activeTab)
  }

  handleClick (e) {
    e.preventDefault()
    const targetTab = Number.parseInt(e.target.getAttribute('data-menu-item-id'))
    if (isNaN(targetTab)) return
    this.setState({ activeTab: targetTab })
  }

  renderTabsMenu (data, activeTab) {
    return (
      <TabsMenu
        { ...this.props }
        data={data}
        activeTab={activeTab}
      />
    )
  }

  renderTab (data, activeTab) {
    const currentContent = data.filter((item, index) => index === activeTab)[0]
    return (
      <Tab
        { ...this.props }
        contentData={currentContent}
      />
    )
  }

  render () {
    const { data, className } = this.props
    const { activeTab } = this.state

    /* eslint-disable
    jsx-a11y/no-static-element-interactions,
    jsx-a11y/click-events-have-key-events,
    jsx-a11y/onclick-has-focus,
    jsx-a11y/onclick-has-role
    */
    return (
      <div
        className={cn('tabs', `tabs-${className}`)}
        onClick={this.handleClick}
      >
        {this.renderTabsMenu(data, activeTab)}
        {this.renderTab(data, activeTab)}
      </div>
    )
  }
}

Tabs.propTypes = {
  data: PropTypes.array,
  className: PropTypes.string,
  initialActiveTab: PropTypes.number
}

Tabs.defaultProps = {
  initialActiveTab: 0
}

export default Tabs
