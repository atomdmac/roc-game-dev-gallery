const MongoClient = require('mongodb');

let projectsDb = null;
let users = null;
const url = 'mongodb://localhost:27017/test';
MongoClient
  .connect(url)
  .then(function (db) {
    projectsDb = db;
    users = db.collection('users');
  })
  .catch(function (err) {
    console.log('ERROR connecting to MongoDb: ', err);
  });

const searchByName = (options = { search: '' }) => {
  if (!projectsDb) return Promise.reject('No database connection.');
  // TODO: Consider replacing this w/ a text index.  Faster?
  const results = users.find({
    name: {
      $regex: '.*' + options.search + '.*',
      $options: 'i'
    }
  });
  return results.toArray();
};

const getById = (options = {}) => {
  if (!projectsDb) return Promise.reject('No database connection.');
  if (typeof options.id !== 'string') return Promise.reject('An "id" propery is missing from the options argument');

  return users.findOne({ id: options.id });
};

module.exports = {
  searchByName,
  getById
};
