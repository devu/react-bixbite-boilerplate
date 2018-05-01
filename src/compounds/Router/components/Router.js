/* eslint no-console: 0 */

import { Component } from 'react';
import PropTypes from 'prop-types';
import { spawnCore, connect } from '../../../react-bixbite';
import RouterReducer from '../reducers/RouterReducer';

class Router extends Component {
  constructor() {
    super()

    this.state = {
      route: null
    }

    const core = spawnCore('ROUTER')
    core.registerControler(RouterReducer)
    connect(this, core.id)

    this.on('ROUTE_HAS_CHANGED', route => {
      this.setState({ route })
    })
  }

  componentWillMount(){
    this.send('ROUTER_INIT', this.props.children)
  }

  render() {
    return this.state.route
  }
}

Router.propTypes = {
  children: PropTypes.any
}

Router.defaultProps = {
  children: {},
};

export default Router;
