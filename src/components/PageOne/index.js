import React, { Fragment } from 'react';
import PropTypes from 'prop-types'

import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class FilterableProductTable extends React.Component {
  render() {
    return (
      <Fragment>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </Fragment>
    );
  }
}

FilterableProductTable.propTypes = {
  products: PropTypes.array
}

export default FilterableProductTable;
