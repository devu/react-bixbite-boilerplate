import React from 'react';
import PropTypes from 'prop-types'

class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">{category}</th>
      </tr>
    );
  }
}

ProductCategoryRow.propTypes = {
  category: PropTypes.string
}

export default ProductCategoryRow;
