import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import githubContext from '../../context/github/githubContext';

const UserItem = (props) => {
  const { login, avatar_url } = props.user;

  const Context = useContext(githubContext);

  return (
    <div className='card text-center'>
      <img className='round-img' src={avatar_url} alt='profile' style={{ width: '60px' }} />
      <h3>{login}</h3>
      <div>
        <button
          style={{ border: 'none', backgroundColor: 'white' }}
          onClick={() => {
            Context.getUser(login);
            Context.getUserRepos(login);
          }}
        >
          <Link
            to={`/user/${login}`}
            style={{ color: 'white', display: 'block', width: '100%' }}
            className='btn btn-dark btn-sm my-1'
          >
            More
          </Link>
        </button>
      </div>
    </div>
  );
};

export default UserItem;
