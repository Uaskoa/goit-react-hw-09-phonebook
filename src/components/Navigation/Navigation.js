import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import routes from "../../routes";
import { getIsAuth } from "../../redux/auth/auth-selectors";
import "./Navigation.scss";

const Navigation = ({ isAuth }) => {
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

      {isAuth && (
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
};

const mapStateToProps = (state) => ({
  isAuth: getIsAuth(state),
});

export default connect(mapStateToProps)(Navigation);
