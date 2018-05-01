/* eslint no-console: 0 */

import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from '../../../react-bixbite'

class Route extends Component {
  constructor(props) {
    super(props)
    connect(this, 'ROUTER')
  }

  componentDidMount() {
    console.log('Route::didmount', this.props.component)
  }

  render() {
    return this.props.component
  }
}

Route.propTypes = {
  component: PropTypes.any,
}

export default Route