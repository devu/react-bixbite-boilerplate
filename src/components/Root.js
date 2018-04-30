import React, { Component, Fragment } from 'react';
import { connect } from '../react-bixbite';

import FilterableProductTable from './PageOne';

import Router from '../compounds/Router'

class Root extends Component {
  constructor() {
    super()

    connect(this)
    
    this.on('ROOT_INITIALISED', state => {
      this.setState(state)
    })
  }

  componentWillMount() {
    this.send('APP_INIT')
  }

  componentWillUnmount() {
    this.removeSlot('ROOT_INITIALISED')
  }

  render() {
    return (
      <Fragment>
        <Router>
          <FilterableProductTable products={this.state.products} />
        </Router>
      </Fragment>
    )
  }
}

export default Root
