import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const { title } = props;
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className='bi bi-github'></i> {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'GitHub Finder',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Navbar;
