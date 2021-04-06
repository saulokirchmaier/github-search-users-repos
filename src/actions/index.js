export const REQ_SEARCH = 'REQ_SEARCH';
export const SEARCHED_USERS = 'SEARCHED_USERS';
export const USER_CLICKED = 'USER_CLICKED';
export const USER_REPOS = 'USER_REPOS';
export const USER_INFO = 'USER_INFO';

export const reqSearch = () => ({
  type: REQ_SEARCH,
})

export const searchedUsers = (users) => ({
  type: SEARCHED_USERS,
  users,
})

export const searchUsers = (name) => (
  async (dispatch) => {
    dispatch(reqSearch());
    const fetchUsers = await fetch(`https://api.github.com/search/users?q=${name}+in:login&per_page=5`);
    const users = await fetchUsers.json();
    return dispatch(searchedUsers(users.items));
  }
);

export const userClicked = (userClicked) => ({
  type: USER_CLICKED,
  userClicked,
});

export const userInfo = (userInfo) => ({
  type: USER_INFO,
  userInfo,
});

export const getUserInfo = (userURL) => (
  async (dispatch) => {
    dispatch(reqSearch());
    const fetchInfo = await fetch(userURL);
    const info = await fetchInfo.json();
    return dispatch(userInfo(info));
  }
);

export const userRepos = (repos) => ({
  type: USER_REPOS,
  repos,
});

export const getUserRepos = (repoURL) => (
  async (dispatch) => {
    dispatch(reqSearch())
    const fetchRepos = await fetch(repoURL);
    const repos = await fetchRepos.json();
    return dispatch(userRepos(repos));
  }
);
