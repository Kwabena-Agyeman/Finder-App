import { SET_LOADING, SET_USERS, SEARCH_USERS, GET_SINGLE_USER, GET_REPOS, CLEAR_USERS, SET_ALERT } from '../constants';

const githubReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case SEARCH_USERS: {
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    }
    case GET_SINGLE_USER:
      return {
        ...state,
        singleUser: action.payload,
        loading: false,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
      };
    case SET_ALERT:
      return {
        ...state,
        alert: action.payload,
      };
    default:
      return state;
  }
};

export default githubReducer;
