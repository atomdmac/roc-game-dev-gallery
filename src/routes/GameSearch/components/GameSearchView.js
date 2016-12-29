import React from 'react';
import SearchBar from 'components/SearchBar';

export const GameSearchView = (props) => {
  const results = props.searchResults.map((result, index) => {
    return <li key={index}>
      <h4>{result.name}</h4>
      <p>By {result.author}</p>
    </li>;
  });
  return <div style={{ margin: '0 auto' }} >
    <h2>Search Games:</h2>
    <SearchBar {...props} onChange={props.handleSearchInput} />
    <div style={{ width: 50, height: 50, background: 'green', visibility: props.isFetching ? 'visible' : 'hidden' }} />
    <ul>
      {results.length ? results : 'Sorry, man.  No results :\'(' }
    </ul>
  </div>;
};

GameSearchView.propTypes = {
  isFetching        : React.PropTypes.bool.isRequired,
  searchInput       : React.PropTypes.string.isRequired,
  searchResults     : React.PropTypes.array.isRequired,
  handleSearchInput : React.PropTypes.func.isRequired
};

export default GameSearchView;
