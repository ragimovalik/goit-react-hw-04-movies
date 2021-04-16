import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import Nav from './components/Nav';
import MovieDetailsPage from './pages/MovieDetailsPage';
import NotFound from './pages/NotFound';
import './App.css';

const App = () => (
  <>
    <Nav />

    <Switch>
      <Route path="/" exact component={HomePage} label="Home Page" />
      <Route path="/movies" exact component={MoviesPage} label="Movies Page" />
      <Route
        path="/movies/:movieId"
        component={MovieDetailsPage}
        label="Movie Detail"
      />
      <Route component={NotFound} />
    </Switch>
  </>
);

export default App;

/*
Redirect to

suspense from react = fallback={<p> ...loading</p>}
lazy from react = cb
comment === webpackChunkName: "?????" 

*/
