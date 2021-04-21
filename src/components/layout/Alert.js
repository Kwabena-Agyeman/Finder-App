import React, { useContext } from 'react';
import githubContext from '../../context/github/githubContext';

const Alert = () => {
  const Context = useContext(githubContext);
  if (Context.alert !== null) {
    return (
      <div className={`alert alert-${Context.alert.type}`}>
        <i className='bi bi-exclamation-triangle-fill'> {Context.alert.msg}</i>
      </div>
    );
  } else {
    return null;
  }
};

export default Alert;
