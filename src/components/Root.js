/* eslint no-console: 0 */
import React, { Component, Fragment } from 'react';
import { connect } from '../react-bixbite';

import FilterableProductTable from './PageOne';

import Router, { Route } from '../compounds/Router';

class Root extends Component {
  constructor() {
    super()

    connect(this)

    this.on('ROOT_INITIALISED', state => {
      this.setState(state)
    });
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
        <Router>
          <Route rule={'page1'}>
            <p> Page 1 </p>
            <FilterableProductTable products={this.state.products} />
          </Route>
          <Route rule={'page2'}>
            <p> Page 2 </p>
            <FilterableProductTable products={this.state.products} />
          </Route>
          <Route rule={'page3'}>
            <p> Page 3 </p>
            <FilterableProductTable products={this.state.products} />
          </Route>
        </Router>
      </Fragment>
    );
  }
}

export default Root
