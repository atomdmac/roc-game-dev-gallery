import React from 'react';
import SearchBar from 'components/SearchBar';
import GameSearchResult from './GameSearchResult';
import './GameSearchView.scss';

export const GameSearchView = (props) => {
  console.log(props.searchInput);
  const results = props.searchResults.map((result, index) => {
    return <GameSearchResult {...result} key={index} />;
  });
  return <div className='game-search' style={{ margin: '0 auto' }} >
    <SearchBar
      placeholder='Who in ROC is working on...'
      {...props}
      onChange={props.handleSearchInput}
    />
    <ul>
      {results.length && props.searchInput !== '' ? results : 'Sorry, man.  No results :\'(' }
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
