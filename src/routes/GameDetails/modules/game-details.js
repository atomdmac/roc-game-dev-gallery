import * as projects from 'services/project-service';

// ------------------------------------
// Constants
// ------------------------------------
export const GAME_DETAILS_REQUEST = 'GAME_DETAILS_REQUEST';
export const GAME_DETAILS_SUCCESS = 'GAME_DETAILS_SUCCESS';
export const GAME_DETAILS_FAILURE = 'GAME_DETAILS_FAILURE';

// ------------------------------------
// Actions
// ------------------------------------
export function requestProject (id) {
  return (dispatch, getState) => {
    dispatch({
      type: GAME_DETAILS_REQUEST
    });
    return projects
      .getById({ id })
      .then(
        // SUCCESS
        result => dispatch(requestProjectSuccess(result)),
        error => dispatch(requestProjectFailure(error))
      );
  };
}

export function requestProjectSuccess (result) {
  return {
    type: GAME_DETAILS_SUCCESS,
    payload: result
  };
}

export function requestProjectFailure (error) {
  return {
    type: GAME_DETAILS_FAILURE,
    payload: error
  };
}

export const actions = {
  requestProject,
  requestProjectSuccess,
  requestProjectFailure
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GAME_DETAILS_REQUEST] : (state, action) => {
    return {
      ...state,
      isFetching: true
    };
  },
  [GAME_DETAILS_SUCCESS] : (state, action) => {
    return {
      ...state,
      isFetching: false,
      project: action.payload
    };
  },
  [GAME_DETAILS_FAILURE] : (state, action) => {
    return {
      ...state,
      isFetching: false,
      error: action.payload
    };
  }
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  isFetching: false,
  project: null,
  error: null
};
export default function gameDetailsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
