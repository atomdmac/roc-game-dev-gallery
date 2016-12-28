const projects = [
  {
    id: '1',
    name: 'Project 1',
    author: 'Jimmy Gaymaker',
    link: 'http://my.game.com',
    tools: ['Tool 1', 'Tool 2', 'Tool 3'],
    tags: ['rpg', 'rogue-like', 'adventure']
  },
  {
    id: '2',
    name: 'Project 2',
    author: 'Arthur Authorton',
    link: 'http://megafun.com',
    tools: ['Tool 1', 'Tool 2', 'Tool 3'],
    tags: ['point-and-click', 'story-driven', 'adventure']
  },
  {
    id: '3',
    name: 'Project 3',
    author: 'Zoe Devmeister',
    link: 'http://bestgameevar.com',
    tools: ['Gamemaker Studio'],
    tags: ['first-person shooter']
  },
  {
    id: '4',
    name: 'Game of Games',
    author: 'Sasha Swisscheese',
    link: 'http://gameon.org',
    tools: ['C++', 'Audacity', 'Blender3D'],
    tags: ['rpg', 'rogue-like', 'adventure']
  }
];

export const searchByName = (options = { search: '' }) => {
  const results = projects.filter(project => {
    return project.name.toLowerCase().indexOf(options.search.toLowerCase()) > -1;
  });
  return Promise.resolve(results);
};
