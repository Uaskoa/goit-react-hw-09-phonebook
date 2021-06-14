import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import routes from '../../routes';
import { getIsAuth } from '../../redux/auth/auth-selectors';
import './Navigation.scss';

export default function Navigation() {
  const isLoggedIn = useSelector(getIsAuth);
  return (
    <nav className="nav">
      <NavLink
        className="nav__link"
        exact
        to={routes.home}
        activeClassName="nav__link--active"
      >
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          className="nav__link"
          exact
          to={routes.contacts}
          activeClassName="nav__link--active"
        >
          Phonebook
        </NavLink>
      )}
    </nav>
  );
}
