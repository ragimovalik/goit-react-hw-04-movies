import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from './routes';
import Loader from 'react-loader-spinner';
import Nav from './components/Nav';
import NotFound from './pages/NotFound';
import './App.css';

const App = () => (
  <>
    <Nav />
    {/* <Suspense fallback={<p>Loading</p>}> */}
    <Suspense
      fallback={
        <div className={'loader'}>
          <Loader
            type="ThreeDots"
            color="#303F9F"
            height={60}
            width={60}
            timeout={5000}
          />
        </div>
      }
    >
      <Switch>
        {routes.map(({ path, exact, component: Component, label }) => (
          <Route
            key={path}
            path={path}
            exact={exact}
            component={Component}
            label={label}
          />
        ))}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </>
);

export default App;
