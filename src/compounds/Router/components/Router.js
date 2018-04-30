/* eslint no-console: 0 */

import { Component } from 'react'
import PropTypes from 'prop-types'
import { spawnCore, connect } from '../../../react-bixbite'
import RouterReducer from '../reducers/RouterReducer'

class Router extends Component {
  constructor(){
    super()

    const core = spawnCore('ROUTER')
    core.registerControler(RouterReducer)
    connect(this, 'ROUTER')
  }

  componentWillMount(){
    console.log('Router')
    this.send('ROUTER_INIT')
  }

  render(){
    return {...this.props.children}
  }
}

Router.propTypes = {
  children: PropTypes.any
}

Router.defaultProps = {
  children: {}
}

export default Router