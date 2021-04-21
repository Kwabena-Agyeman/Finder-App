import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

import githubContext from '../../context/github/githubContext';

const Users = () => {
  const Context = useContext(githubContext);

  if (Context.loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {Context.users.map((user) => {
          return <UserItem key={user.id} user={user} />;
        })}
      </div>
    );
  }
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Users;
