import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from './routes';
import Nav from './components/Nav';
import NotFound from './pages/NotFound';
import './App.css';

const App = () => (
  <>
    <Nav />
    <Suspense fallback={<p>Loading</p>}>
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

/*
      <Route path="/" exact component={HomePage} label="Home Page" />
      <Route path="/movies" exact component={MoviesPage} label="Movies Page" />
      <Route
        path="/movies/:movieId"
        component={MovieDetailsPage}
        label="Movie Detail"
      />
*/

/*
Redirect to
*/
