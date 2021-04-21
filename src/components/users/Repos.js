import React, { useContext } from 'react';
import githubContext from '../../context/github/githubContext';

const Repos = () => {
  const Context = useContext(githubContext);

  return (
    <div>
      <h2>Repos</h2>
      {Context.repos.map((repo) => {
        return (
          <div className='card' key={repo.id}>
            <a target='_blank' rel='noreferrer' href={repo.html_url}>
              {repo.name}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Repos;
