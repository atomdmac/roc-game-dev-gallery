import React from 'react';

export const SearchBar = (props) => {
  const { searchInput, onChange } = props;
  return <div>
    <input
      type='text'
      placeholder='Search...'
      value={searchInput}
      onChange={onChange}
    />
  </div>;
};

SearchBar.propTypes = {
  searchInput: React.PropTypes.string.isRequired,
  onChange  : React.PropTypes.func
};

export default SearchBar;
