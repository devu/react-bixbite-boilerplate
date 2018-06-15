/* eslint no-console: 0 */
import React, { Component, Fragment } from 'react'
import { connect } from '../react-bixbite'

import FilterableProductTable from './PageOne'
import SomeExperiment from './PageTwo'

import Router, { Route } from '../compounds/Router'
import MainLayout from './PageThree/MainLayout';
import Dashboard from './PageThree/Dashboard/Dashboard';

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
        <Router defaultPath={'/page/3'}>
          <Route isDefault>
            <p> not found 404 </p>
          </Route>
          <Route rule={'/page/1'}>
            <p> Page 1 </p>
            <FilterableProductTable products={this.state.products} />
          </Route>
          <Route rule={'/page/2'}>
            <p> Page 2 </p>
            <SomeExperiment />
          </Route>
          <Route rule={'/page/3'}>
            <p> Page 3 </p>
            <MainLayout>
             <Dashboard /> 
            </MainLayout>
          </Route>
        </Router>
      </Fragment>
    )
  }
}

export default Root
