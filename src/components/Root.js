import React, { Fragment } from 'react';
import Container from '../react-bixbite';

import FilterableProductTable from './PageOne';

class Root extends Container {
  constructor(coreId) {
    super(coreId);
    
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
        <FilterableProductTable products={this.state.products} />
      </Fragment>
    )
  }
}

export default Root;
