import { connect } from "react-redux";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav";
import { getIsAuth } from "../../redux/auth/auth-selectors";
import "./AppBar.scss";

const AppBar = ({ isAuth }) => {
  return (
    <header className="header">
      <Navigation />
      {isAuth ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

const makeStateToProps = (state) => ({
  isAuth: getIsAuth(state),
});

export default connect(makeStateToProps)(AppBar);
