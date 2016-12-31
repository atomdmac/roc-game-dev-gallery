import React from 'react';

import './SearchBar.scss';

export const SearchBar = (props) => {
  const { searchInput, onChange, isFetching, placeholder = 'Search...' } = props;
  return <div className='search-bar'>
    <input
      type='text'
      placeholder={placeholder}
      value={searchInput}
      onChange={onChange}
    />
    <div
      className='icon-waiting'
      style={{ visibility: isFetching ? 'visible' : 'hidden' }}
    />
  </div>;
};

SearchBar.propTypes = {
  placeholder : React.PropTypes.string,
  isFetching  : React.PropTypes.bool,
  searchInput : React.PropTypes.string.isRequired,
  onChange    : React.PropTypes.func
};

export default SearchBar;
