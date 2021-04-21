import React, { useEffect, useContext } from 'react';
import './App.css';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import SingleUser from './components/users/SingleUser';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import githubContext from './context/github/githubContext';

const App = () => {
  const Context = useContext(githubContext);

  // Load initial users
  useEffect(() => {
    Context.setLoading();
    Context.setUsers();

    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Alert />
          <Switch>
            <Route exact path='/'>
              <Search />
              <Users />
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
            <Route exact path='/user/:login'>
              <SingleUser />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
