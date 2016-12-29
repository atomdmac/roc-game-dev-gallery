const projects = [
  {
    id: '1',
    name: 'Project 1',
    author: 'Jimmy Gaymaker',
    link: 'http://my.game.com',
    platforms: ['Windows'],
    tools: ['Tool 1', 'Tool 2', 'Tool 3'],
    tags: ['rpg', 'rogue-like', 'adventure']
  },
  {
    id: '2',
    name: 'Project 2',
    author: 'Arthur Authorton',
    link: 'http://megafun.com',
    platforms: ['Windows'],
    tools: ['Tool 1', 'Tool 2', 'Tool 3'],
    tags: ['point-and-click', 'story-driven', 'adventure']
  },
  {
    id: '3',
    name: 'Project 3',
    author: 'Zoe Devmeister',
    link: 'http://bestgameevar.com',
    platforms: ['Windows'],
    tools: ['Gamemaker Studio'],
    tags: ['first-person shooter']
  },
  {
    id: '4',
    name: 'Game of Games',
    author: 'Sasha Swisscheese',
    link: 'http://gameon.org',
    platforms: ['Windows'],
    tools: ['C++', 'Audacity', 'Blender3D'],
    tags: ['rpg', 'rogue-like', 'adventure']
  }
];

export const searchByName = (options = { search: '' }) => {
  const results = projects.filter(project => {
    return project.name.toLowerCase().indexOf(options.search.toLowerCase()) > -1;
  });
  // Simulate latency
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(results), 1000 * Math.random());
  });
};
