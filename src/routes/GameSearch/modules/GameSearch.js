// ------------------------------------
// Services
// ------------------------------------
import * as projects from 'services/project-service';

// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
export const COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC';

export const SEARCH_BY_NAME_REQUEST = 'SEARCH_BY_NAME_REQUEST';
export const SEARCH_BY_NAME_SUCCESS = 'SEARCH_BY_NAME_SUCCESS';
export const SEARCH_BY_NAME_FAILURE = 'SEARCH_BY_NAME_FAILURE';

// ------------------------------------
// Actions
// ------------------------------------

export function searchByName (value = '') {
  return (dispatch, getState) => {
    // Let the user know what's up.
    dispatch(requestSearchByNameSuccess(value));

    // Get get them projects!
    return projects
      .searchByName({ search: value })
      .then(
        // SUCCESS!
        results => dispatch(recieveSearchByName(results)),
        // FAILURE!
        error => dispatch(recieveSearchByNameFailure(error))
      );
  };
}

export function requestSearchByNameSuccess (value = '') {
  return {
    type: SEARCH_BY_NAME_REQUEST,
    payload: value
  };
}

export function recieveSearchByName (results = []) {
  return {
    type: SEARCH_BY_NAME_SUCCESS,
    payload: results
  };
}

export function recieveSearchByNameFailure (error) {
  return {
    type: SEARCH_BY_NAME_FAILURE,
    payload: error
  };
}

export const actions = {
  searchByName
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SEARCH_BY_NAME_REQUEST] : (state, action) => {
    return {
      ...state,
      isFetching: true,
      searchInput: action.payload
    };
  },
  [SEARCH_BY_NAME_SUCCESS] : (state, action) => {
    return {
      ...state,
      isFetching: false,
      searchResults: action.payload
    };
  },
  [SEARCH_BY_NAME_FAILURE] : (state, action) => {
    return {
      ...state,
      isFetching: false
    };
  }
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  isFetching: false,
  searchResults: [],
  searchInput: ''
};

export default function gameSearchReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
