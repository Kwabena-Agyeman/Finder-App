import { useReducer } from 'react';
import githubContext from './githubContext';
import githubReducer from './githubReducer';
import { SET_LOADING, SET_USERS, SEARCH_USERS, GET_SINGLE_USER, GET_REPOS, CLEAR_USERS, SET_ALERT } from '../constants';

const GithubState = (props) => {
  const intialState = {
    users: [],
    singleUser: {},
    repos: [],
    loading: false,
    alert: null,
  };

  const [state, dispatch] = useReducer(githubReducer, intialState);

  //SET LOADING
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  //SET INITIAL USERS
  const setUsers = () => {
    async function fetchData() {
      let res = await fetch(
        `https://api.github.com/users?client_id=dc745248d8aba58eb87a&client_secret=103544a54455139af439bf8df6c75fba4b625e64`
      );

      let data = await res.json();
      dispatch({ type: SET_USERS, payload: data });
    }

    fetchData();
  };

  // SEARCH USERS
  const searchUsers = async (searchfield) => {
    setLoading();
    let res = await fetch(
      `https://api.github.com/search/users?q=${searchfield}&client_id=dc745248d8aba58eb87a&client_secret=103544a54455139af439bf8df6c75fba4b625e64`
    );

    let data = await res.json();

    dispatch({ type: SEARCH_USERS, payload: data.items });
  };

  // GET SINGLE USER
  const getUser = async (username) => {
    setLoading();
    let res = await fetch(
      `https://api.github.com/users/${username}?client_id=dc745248d8aba58eb87a&client_secret=103544a54455139af439bf8df6c75fba4b625e64`
    );

    let data = await res.json();

    dispatch({ type: GET_SINGLE_USER, payload: data });
  };

  // GET USERS REPOS

  const getUserRepos = async (username) => {
    setLoading();
    let res = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=dc745248d8aba58eb87a&client_secret=103544a54455139af439bf8df6c75fba4b625e64`
    );

    let data = await res.json();

    dispatch({ type: GET_REPOS, payload: data });
  };

  // CLEAR USERS FROM UI

  const clearUsers = () => {
    dispatch({ type: CLEAR_USERS });
  };

  //SHOW ALERT
  const showAlert = (msg, type) => {
    dispatch({ type: SET_ALERT, payload: { msg: msg, type: type } });

    setTimeout(() => {
      dispatch({ type: SET_ALERT, payload: null });
    }, 3000);
  };

  return (
    <githubContext.Provider
      value={{
        users: state.users,
        singleUser: state.singleUser,
        repos: state.repos,
        loading: state.loading,
        alert: state.alert,
        setLoading,
        setUsers,
        searchUsers,
        getUser,
        getUserRepos,
        clearUsers,
        showAlert,
      }}
    >
      {props.children}
    </githubContext.Provider>
  );
};

export default GithubState;
