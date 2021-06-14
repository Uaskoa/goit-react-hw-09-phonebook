import { Suspense, lazy, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import routes from './routes';
import AppBar from './components/AppBar/AppBar';
import NotFoundView from './views/NotFoundView';
import { authOperations } from './redux/auth';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Loader from 'react-loader-spinner';
import './styles.css';
import './App.scss';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "home-page" */),
);

const LoginView = lazy(() =>
  import('./views/LoginView' /* webpackChunkName: "login-page" */),
);

const RegisterView = lazy(() =>
  import('./views/RegisterView' /* webpackChunkName: "register-page" */),
);

const PhonebookView = lazy(() =>
  import('./views/PhonebookView' /* webpackChunkName: "phonebook-page" */),
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <div className="container">
      <AppBar />
      <Suspense
        fallback={
          <Loader
            className="Loader"
            type="ThreeDots"
            color="#9098a3"
            height={50}
            width={50}
            timeout={3000}
          />
        }
      >
        <Switch>
          <Route exact path={routes.home} component={HomeView} />
          <PublicRoute
            path={routes.register}
            restricted
            redirectTo={routes.contacts}
          >
            <RegisterView />
          </PublicRoute>
          <PublicRoute
            path={routes.login}
            restricted
            redirectTo={routes.contacts}
          >
            <LoginView />
          </PublicRoute>
          <PrivateRoute path={routes.contacts} redirectTo={routes.login}>
            <PhonebookView />
          </PrivateRoute>
          <Route component={NotFoundView} />
        </Switch>
      </Suspense>
    </div>
  );
}
