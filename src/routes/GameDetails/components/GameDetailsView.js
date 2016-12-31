import React from 'react';

import './GameDetailsView.scss';

export class GameDetailsView extends React.Component {
  componentDidMount () {
    const id = this.props.params.id;
    if (this.props.project && this.props.project.id === id) return;
    this.props.requestProject(this.props.params.id);
  }
  render () {
    if (this.props.isFetching) {
      return <div className='game-details'>
        <h2>Loading...</h2>
      </div>;
    } else if (this.props.project) {
      const { media, name, author, platforms } = this.props.project;
      return <div className='game-details'>
        <div className='banner'>
          <img src={media.banner} />
        </div>
        <h2>{name}</h2>
        <p>{author}</p>
        <p>{platforms}</p>
      </div>;
    } else {
      return <div className='game-details'>
        <h2>Aw, sorry man... :(</h2>
      </div>;
    }
  }
};

GameDetailsView.propTypes = {
  requestProject : React.PropTypes.func.isRequired,
  params         : React.PropTypes.object.isRequired,
  isFetching     : React.PropTypes.bool.isRequired,
  project        : React.PropTypes.object,
  error          : React.PropTypes.string
};

export default GameDetailsView;
