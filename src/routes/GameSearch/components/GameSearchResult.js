import React from 'react';
import { Link } from 'react-router';
import './GameSearchResult.scss';

const GameSearchResult = (props) => {
  const { id, media, name, author, platforms, tags } = props;
  return <li className='game-search-result'>
    <Link to={'/project/' + id}>
      <img src={media.thumb} />
      <div>
        <h4>{name}</h4>
        <p>By {author}</p>
        <p>{platforms}</p>
        <p>{tags}</p>
      </div>
    </Link>
  </li>;
};

GameSearchResult.propTypes = {
  id        : React.PropTypes.string.isRequired,
  media     : React.PropTypes.object.isRequired,
  name      : React.PropTypes.string.isRequired,
  author    : React.PropTypes.string.isRequired,
  link      : React.PropTypes.string.isRequired,
  platforms : React.PropTypes.array.isRequired,
  tools     : React.PropTypes.array.isRequired,
  tags      : React.PropTypes.array.isRequired
};

export default GameSearchResult;
