/* eslint no-console: 0 */
import { Component } from 'react'
import PropTypes from 'prop-types'
import BixBite from './BixBite'

class Container extends Component {
  constructor(props) {
    super(props)
    BixBite.connect(this, props.coreId)
  }
}

Container.propTypes = {
  coreId: PropTypes.string.isRequired
}
export default Container