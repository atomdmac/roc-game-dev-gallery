const P = require('bluebird');
const MongoClient = require('mongodb');

let projectsDb = null;
let projects = null;
const url = 'mongodb://localhost:27017/roc-game-dev-gallery';
MongoClient
  .connect(url)
  .then(function (db) {
    projectsDb = db;
    projects = db.collection('projects');
  })
  .catch(function (err) {
    console.log('ERROR connecting to MongoDb: ', err);
  });

const searchByName = (options = { search: '' }) => {
  if (!projectsDb) return Promise.reject('No database connection.');
  // TODO: Consider replacing this w/ a text index.  Faster?
  const results = P.all([
    projects.find({
      name: {
        $regex: '.*' + options.search + '.*',
        $options: 'i'
      }
    }),
    projects.find({
      author: {
        $regex: '.*' + options.search + '.*',
        $options: 'i'
      }
    })
  ])
  .spread((nameResults, authorResults) => {
    return P.all([
      nameResults.toArray(),
      authorResults.toArray()
    ])
    .spread((nameResultsArr, authorResultsArr) => {
      return nameResultsArr.concat(authorResultsArr);
    });
  });
  return results;
};

const getById = (options = {}) => {
  if (!projectsDb) return Promise.reject('No database connection.');
  if (typeof options.id !== 'string') return Promise.reject('An "id" propery is missing from the options argument');

  return projects.findOne({ id: options.id });
};

module.exports = {
  searchByName,
  getById
};
