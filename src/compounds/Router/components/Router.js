/* eslint no-console: 0 */

import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect, getCore } from '../../../react-bixbite'

class Router extends Component {
  constructor(coreId) {
    super(coreId)

    this.state = {
      routeChildren: null
    }

    const core = getCore('ROUTER')
    connect(this, core.id)

    this.on('ROUTE_HAS_CHANGED', route => {
      this.setState({ routeChildren: route.children })
    })
  }

  componentWillMount() {
    const { children, defaultPath } = this.props
    this.send('ROUTER_INIT', { children, defaultPath })
  }

  render() {
    return this.state.routeChildren
  }
}

Router.propTypes = {
  children: PropTypes.any,
  defaultPath: PropTypes.string.isRequired
}

Router.defaultProps = {
  children: {},
  defaultPath: ''
}

export default Router
