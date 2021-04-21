import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GithubState from './context/github/GithubState';

ReactDOM.render(
  <React.StrictMode>
    <GithubState>
      <App />
    </GithubState>
  </React.StrictMode>,
  document.getElementById('root')
);
