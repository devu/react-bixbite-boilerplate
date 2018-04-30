import React from 'react';
import PropTypes from 'prop-types'

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

SearchBar.propTypes = {
  products: PropTypes.array
}

export default SearchBar;
