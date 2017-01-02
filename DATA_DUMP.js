/*
## USAGE

1. Launch mongod server
2. Navigate to this folder containing this file in terminal
3. Connect to the database using mongo client
4. Create a new database called 'roc-game-dev-gallery':
```use roc-game-dev-gallery```
4. Load and run this file using the following code:
```load('DATA_DUMP.js')```
5. Confirm that data was loaded using:
```db.projects.find()```
*/
db.projects.insertMany([
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
  },
  {
    id: '5',
    media: {
      thumb: '/images/placeholder.png',
      banner: '/images/placeholder.png',
      screenshots: []
    },
    name: 'Game of Games 2: Redux',
    author: 'Sasha Swisscheese',
    link: 'http://gameonagain.org',
    platforms: ['Windows'],
    tools: ['C++', 'Audacity', 'Blender3D'],
    tags: ['rpg', 'rogue-like', 'adventure']
  }
]);
db.projects.createIndex({
  name: 'text',
  author: 'text'
});
