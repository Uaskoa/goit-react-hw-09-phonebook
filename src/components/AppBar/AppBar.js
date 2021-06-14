import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav';
import { getIsAuth } from '../../redux/auth/auth-selectors';
import './AppBar.scss';

export default function AppBar() {
  const isLoggedIn = useSelector(getIsAuth);
  return (
    <header className="header">
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
