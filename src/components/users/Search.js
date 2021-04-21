import React, { useState, useContext } from 'react';

import githubContext from '../../context/github/githubContext';

const Search = () => {
  const [text, setText] = useState('');

  const Context = useContext(githubContext);

  const changeText = (e) => {
    setText(e.target.value);
  };

  const sumbitForm = (e) => {
    e.preventDefault();
    if (text === '') {
      Context.showAlert('Please enter a github user', 'light');
    } else {
      Context.searchUsers(text);

      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={sumbitForm} className='form'>
        <input type='text' name='text' placeholder='Search github username' value={text} onChange={changeText} />
        <input type='submit' value='Search' className='btn btn-dark btn-block' />
      </form>
      {(Context.users.length > 0 ? true : false) ? (
        <button className='btn btn-light btn-block' onClick={Context.clearUsers}>
          Clear
        </button>
      ) : null}
    </div>
  );
};

export default Search;
