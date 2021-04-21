import React, { useContext } from 'react';
import Spinner from '../layout/Spinner';
import Repos from './Repos';
import { Link } from 'react-router-dom';
import githubContext from '../../context/github/githubContext';

const SingleUser = () => {
  const Context = useContext(githubContext);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    company,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = Context.singleUser;

  if (Context.loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        <button className='btn btn-dark my-1'>
          <Link to='/' style={{ color: 'white' }}>
            Back to search
          </Link>
        </button>
        <div className='card grid-2'>
          <div className='all-center'>
            <img src={avatar_url} alt='profiel' className='round-img' style={{ width: '200px' }} />
            <h1>{name}</h1>
            <p>City : {location}</p>
            <p>
              Hireable :{' '}
              {hireable ? (
                <i className='bi bi-check-square-fill' style={{ color: 'green', fontSize: '1.2rem' }}></i>
              ) : (
                <i className='bi bi-x-circle-fill' style={{ color: 'red', fontSize: '1.2rem' }}></i>
              )}
            </p>
          </div>
          <div>
            {bio ? (
              <div>
                <h3>bio</h3> <p>{bio}</p>
              </div>
            ) : null}
            <a href={html_url} target='_blank' rel='noreferrer' className='btn btn-dark my-1'>
              Visit GitHub profile
            </a>
            <ul>
              <li>
                {login ? (
                  <div>
                    <strong>Username: </strong>
                    {login}{' '}
                  </div>
                ) : null}
              </li>
              <li>
                {company ? (
                  <div>
                    <strong>Company: </strong>
                    {company}{' '}
                  </div>
                ) : null}
              </li>
              <li>
                {blog ? (
                  <div>
                    <strong>Webiste: </strong>
                    {blog}{' '}
                  </div>
                ) : null}
              </li>
            </ul>
          </div>
        </div>
        <div className='card text-center'>
          <div className='badge badge-light'>Followers : {followers}</div>
          <div className='badge badge-light'>Following : {following}</div>
          <div className='badge badge-light'>Public Repos : {public_repos}</div>
          <div className='badge badge-light'>Public Gist : {public_gists}</div>
        </div>
        <div>
          <Repos></Repos>
        </div>
      </div>
    );
  }
};

export default SingleUser;
