import * as api from 'axios';

export const searchByName = (options = { search: '' }) => {
  const req = {
    params: {
      search: options.search
    }
  };
  // Simulate latency
  return api
    .get('/api/search', req)
    .then(response => {
      return response.data;
    });
};

export const getById = (options = {}) => {
  if (typeof options.id !== 'string') return Promise.reject('An "id" propery is missing from the options argument');
  const req = {
    params: {
      id: options.id
    }
  };
  return api
    .get('/api/project/', req)
    .then(response => {
      return response.data;
    });
};
