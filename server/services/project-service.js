const projects = [
  {
    id: '1',
    media: {
      thumb: '/images/placeholder.png',
      banner: '/images/placeholder.png',
      screenshots: []
    },
    name: 'Project 1',
    author: 'Jimmy Gaymaker',
    link: 'http://my.game.com',
    platforms: ['Windows'],
    tools: ['Tool 1', 'Tool 2', 'Tool 3'],
    tags: ['rpg', 'rogue-like', 'adventure']
  },
  {
    id: '2',
    media: {
      thumb: '/images/placeholder.png',
      banner: '/images/placeholder.png',
      screenshots: []
    },
    name: 'Project 2',
    author: 'Arthur Authorton',
    link: 'http://megafun.com',
    platforms: ['Windows'],
    tools: ['Tool 1', 'Tool 2', 'Tool 3'],
    tags: ['point-and-click', 'story-driven', 'adventure']
  },
  {
    id: '3',
    media: {
      thumb: '/images/placeholder.png',
      banner: '/images/placeholder.png',
      screenshots: []
    },
    name: 'Project 3',
    author: 'Zoe Devmeister',
    link: 'http://bestgameevar.com',
    platforms: ['Windows'],
    tools: ['Gamemaker Studio'],
    tags: ['first-person shooter']
  },
  {
    id: '4',
    media: {
      thumb: '/images/placeholder.png',
      banner: '/images/placeholder.png',
      screenshots: []
    },
    name: 'Game of Games',
    author: 'Sasha Swisscheese',
    link: 'http://gameon.org',
    platforms: ['Windows'],
    tools: ['C++', 'Audacity', 'Blender3D'],
    tags: ['rpg', 'rogue-like', 'adventure']
  }
];

const searchByName = (options = { search: '' }) => {
  const results = projects.filter(project => {
    return project.name.toLowerCase().indexOf(options.search.toLowerCase()) > -1;
  });
  return new Promise((resolve, reject) => {
    resolve(results);
  });
};

const getById = (options = {}) => {
  if (typeof options.id !== 'string') return Promise.reject('An "id" propery is missing from the options argument');

  const result = projects.find(project => project.id === options.id);
  // Simulate latency.
  return new Promise((resolve, reject) => {
    resolve(result);
  });
};

module.exports = {
  searchByName,
  getById
};
