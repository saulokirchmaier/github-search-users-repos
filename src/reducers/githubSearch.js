import { REQ_SEARCH, SEARCHED_USERS, USER_CLICKED, USER_INFO, USER_REPOS } from '../actions';

const INITIAL_STATE = {
  users: [],
  isLoading: false,
  userClicked: {},
  userInfo: {},
  userRepos: [],
}

const githubSearch = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQ_SEARCH:
      return { ...state, isLoading: true };
    case SEARCHED_USERS:
      return { ...state, users: action.users, isLoading: false };
    case USER_CLICKED:
      return { ...state, userClicked: action.userClicked };
    case USER_INFO:
      return { ...state, userInfo: action.userInfo, isLoading: false };
    case USER_REPOS:
      return { ...state, userRepos: action.repos, isLoading: false };
    default:
      return state;
  }
};

export default githubSearch;
