/* eslint no-console: 0 */
import React, { Component, Fragment } from 'react'
import { connect } from '../react-bixbite'

import FilterableProductTable from './PageOne'

import Router, { Route } from '../compounds/Router'

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
    console.log('Root::render')
    return (
      <Fragment>
        <Router defaultRoute={'/page/1'}>
          <Route isDefault>
            <p> not found 404 </p>
          </Route>
          <Route rule={'/page/1'}>
            <p> Page 1 </p>
            <FilterableProductTable products={this.state.products} />
          </Route>
          <Route rule={'/page/2'}>
            <p> Page 2 </p>
            <FilterableProductTable products={this.state.products} />
            <Router>
              <Route rule={'/sub/1'}>
                <p> Sub 1 </p>
              </Route>
              <Route rule={'/sub/2'}>
                <p> Sub 2 </p>
              </Route>
            </Router>
          </Route>
        </Router>
      </Fragment>
    )
  }
}

export default Root
